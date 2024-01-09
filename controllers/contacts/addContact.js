const createContact = require('../../prisma.methods/contact/createContact')
const getUser = require('../../prisma.methods/user/getUser')

const { ctrlWrapper } = require("../../decorators");

const addContact = async (req, res) => {
  const { body } = req
  const owner = body.owner
  
  const result = await createContact({ ...body});
  res.status(201).json(result);
};

module.exports = {
  addContact: ctrlWrapper(addContact),
};
