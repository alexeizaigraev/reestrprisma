const updateUser = require('../../prisma.methods/user').updateUser
const { ctrlWrapper } = require("../../decorators");

const updateStatus = async (req, res) => {
  const { id } = req.user;
  const { status } = req.body;
  if (!status) {
    throw HttpError(
      404,
      "At least one field (status) must be provided."
    );
  }
  const result = await updateUser({id: id}, req.body);

  
  if (!result) {
    throw HttpError(404, `Not found`);
  }

  res.json({ result });
};

module.exports = {
  updateStatus: ctrlWrapper(updateStatus),
};