const updateUserPrisma = require("../../prisma.methods/user/updateUser");
const { HttpError } = require("../../helpers");
// const { cloudinary } = require("../../cloudinary");
const { ctrlWrapper } = require("../../decorators");
const { parseConnectionUrl } = require("nodemailer/lib/shared");


const updateUserData = async (req, res) => {
  let { id } = req.params;
  // console.log("req.params=", req.params)
  // console.log("req.user=", req.user)
  // console.log("req.body=", req.body)
  id = parseInt(id)
  const { body } = req;
  const { id: owner } = req.user;
  const result = await updateUserPrisma({ id: id}, body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

module.exports = {
    updateUserData: ctrlWrapper(updateUserData),
};