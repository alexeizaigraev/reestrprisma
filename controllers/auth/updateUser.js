const fs = require("fs/promises");
const updateUserPrisma = require('../../prisma.methods/user/updateUser')
const { HttpError } = require("../../helpers");
const { cloudinary } = require("../../cloudinary");
const { ctrlWrapper } = require("../../decorators");

const updateUser = async (req, res) => {
  //const { id } = req.user;
  const id = req.user.id

  const { name, avatarURL } = req.body;
console.log("name, avatarURL", name, avatarURL);
console.log("id=", id, typeof id)
  if (!name && !avatarURL) {
    throw HttpError(
      404,
      "At least one field (name or avatarURL) must be provided."
    );
  }

  let cloudinaryAvatarURL = req.user.avatarURL;

  if (req.file) {
    const { path: filePath, originalname } = req.file;

    const cloudinaryOptions = {
      folder: "avatars",
      allowed_formats: ["jpg", "jpeg", "png", "bmp"],
      public_id: `${originalname}_${id}`,
      transformation: { width: 100, height: 100, crop: "fill" },
      overwrite: true,
      secure: true,
    };

    const { secure_url } = await cloudinary.uploader.upload(
      filePath,
      cloudinaryOptions
    );

    cloudinaryAvatarURL = secure_url;

    await fs.unlink(filePath);
  }

  const updateData = {};

  if (name) {
    updateData.name = name;
  }

  if (cloudinaryAvatarURL) {
    updateData.avatarurl = cloudinaryAvatarURL;
  }

  const newUser = await updateUserPrisma({id: id}, updateData);

  res.status(201).json({
    avatarURL: newUser.avatarURL,
    name: newUser.name,
  });
};
module.exports = {
  updateUser: ctrlWrapper(updateUser),
};
