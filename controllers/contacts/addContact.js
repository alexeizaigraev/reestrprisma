const createContact = require('../../prisma.methods/contact/createContact')
const getUser = require('../../prisma.methods/user/getUser')

const { ctrlWrapper } = require("../../decorators");

const addContact = async (req, res) => {
  let { body } = req
  const userId = req.user.id;
  console.log("userId", userId)
  body.ownerid = userId
  console.log("body.ownerid", body.ownerid)
  
  const result = await createContact({ ...body});
  res.status(201).json(result);
};

module.exports = {
  addContact: ctrlWrapper(addContact),
};
