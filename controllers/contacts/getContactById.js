const getContactByIdPrisma = require('../../prisma.methods/contact/getContactById')
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const getContactById = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id)
  console.log("id", typeof id, id)
  console.log('req.params=', req.params)
  //const { _id: owner } = req.user;
  const result = await getContactByIdPrisma(id);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

module.exports = {
  getContactById: ctrlWrapper(getContactById),
};
