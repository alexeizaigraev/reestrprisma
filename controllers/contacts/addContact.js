const dtoContactIn = require('../../prisma.methods/contact/dtoContactIn')
const dtoContactOut = require('../../prisma.methods/contact/dtoContactOut')
const createContact = require('../../prisma.methods/contact/createContact')
const getUser = require('../../prisma.methods/user/getUser')

const { ctrlWrapper } = require("../../decorators");

const addContact = async (req, res) => {
  console.log('addContact starts...')
  let { body } = req
  let bodyDto = dtoContactIn(body)
  const userId = req.user.id;
  console.log("userId", userId)
  body.ownerid = userId
  console.log("body.ownerid", body.ownerid)

  console.log(bodyDto)
  
  let result = await createContact({ ...body});
  const resultDto = dtoContactOut(result)
  res.json(resultDto);
  // res.status(201).json(resultDto);
};

module.exports = {
  addContact: ctrlWrapper(addContact),
};
