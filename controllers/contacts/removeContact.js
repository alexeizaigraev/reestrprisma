const deleteContactPrisma = require('../../prisma.methods/contact/deleteContact')
const getContactByIdPrisma = require('../../prisma.methods/contact/getContactById')
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const removeContact = async (req, res) => {
  let idPar = req.params.id;
  idPar = parseInt(idPar)
  const { body } = req;
  const userId = req.user.id;
  const result = await deleteContactPrisma({ id: idPar, ownerid: userId }, body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

module.exports = {
  removeContact: ctrlWrapper(removeContact),
};
