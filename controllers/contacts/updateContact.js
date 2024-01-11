const updateContactPrisma = require('../../prisma.methods/contact/updateContact')
const getContactByIdPrisma = require('../../prisma.methods/contact/getContactById')
const dtoContactIn = require('../../prisma.methods/contact/dtoContactIn')
const dtoContactOut = require('../../prisma.methods/contact/dtoContactOut')
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const updateContact = async (req, res) => {
  console.log('updateContact starts...')
  let idPar = req.params.id;
  idPar = parseInt(idPar)
  let body = req.body;
  let bodyDto = dtoContactIn(body)
  console.log('=================================')
  console.log('body=', bodyDto)
  console.log('=================================')
  
  const userId = req.user.id;
  console.log('userId=', userId)
  let result = await updateContactPrisma({ id: idPar, ownerid: userId }, bodyDto);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  const resultDto = dtoContactOut(result)
  res.json(resultDto);
};

module.exports = {
  updateContact: ctrlWrapper(updateContact),
};
