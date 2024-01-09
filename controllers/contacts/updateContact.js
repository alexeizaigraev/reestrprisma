const updateContactPrisma = require('../../prisma.methods/contact/updateContact')
const getContactByIdPrisma = require('../../prisma.methods/contact/getContactById')
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const updateContact = async (req, res) => {
  let idPar = req.params.id;
  idPar = parseInt(idPar)
  const { body } = req;
  const userId = req.user.id;
  const result = await updateContactPrisma({ id: idPar, ownerid: userId }, body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

module.exports = {
  updateContact: ctrlWrapper(updateContact),
};
