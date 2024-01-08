const updateUser = require('../../prisma.methods/user').updateUser

const { ctrlWrapper } = require("../../decorators");
const updateSubscription = async (req, res) => {
  const { id } = req.user;

  const result = await updateUser({id: id}, req.body);

  if (!result) {
    throw HttpError(404, `Not found`);
  }

  res.json({ result });
};

module.exports = {
  updateSubscription: ctrlWrapper(updateSubscription),
};
