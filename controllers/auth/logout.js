// logout
const updateUser = require('../../prisma.methods/user').updateUser
const { ctrlWrapper } = require("../../decorators");
const { User } = require("../../models/user");

const logout = async (req, res) => {
  const { id } = req.user;
  //await User.findByIdAndUpdate(_id, { token: null });
  await updateUser({id: id}, {token: null})
  res.status(204).json({
    message: "Logout success",
  });
};
module.exports = {
  logout: ctrlWrapper(logout),
};
