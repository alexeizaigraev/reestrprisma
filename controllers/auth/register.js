// const {PrismaClient, prisma} = require('./db')
// const db = require('../../db')

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomUUID } = require("crypto");
//const { User } = require("../../models/user");

const getUser = require('../../prisma.methods/user').getUser
const createUser = require('../../prisma.methods/user').createUser

const { HttpError, sendEmail } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");
const path = require("path");
const fs = require("fs/promises");
const gravatar = require("gravatar");
// import "dotenv/config";
//______________


const { SECRET_KEY, BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await getUser({ email: email });
  console.log("req.body======", req.body)
  if (user) {
    throw HttpError(409, "Email already in use");
  }
  
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const verificationToken = randomUUID();
  
  const result = await createUser({
    ...req.body,
    password: hashPassword,
    verificationtoken: verificationToken,
    subscription,
    avatarurl: avatarUrl,
  });
  console.log(result)
  const link = `${BASE_URL}/api/auth/verify/${verificationToken}`
  console.log(link)
  // console.log(BASE_URL, verificationToken);
  const verifyEmail = {
    to: email,
    subject: "Сonfirm your registration",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Вас приветствует ТОВ Довира.  Click to confirm your registration</a>`,
  };

  //await sendEmail(verifyEmail);

  
  res.status(201).json({
    email: email,
    hashPassword: hashPassword,
    subscription: subscription,
    avatarUrl: avatarUrl,
    verificationToken: verificationToken
  });


};

module.exports = {
  register: ctrlWrapper(register),
};
