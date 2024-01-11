const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUser = require('../../prisma.methods/user').getUser
const updateUser = require('../../prisma.methods/user').updateUser

const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");
const { SECRET_KEY } = process.env;
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw HttpError(400, "Email or password is missing");
  }

  const user = await getUser({ email: email });
  console.log('user= ', user)
  console.log('user.id= ', user.id)

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user.id,
  };
  console.log('user.id= ', user.id)
  console.log('SECRET_KEY= ', SECRET_KEY)
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "230h" });
  console.log('token= ', token)
  const result = await updateUser({id: user.id}, {token: token})

  res.json({
    token: token,
    user: {
      name: user.name,
      email: user.email,
      subscription: user.subscription,
      status: user.status, 
      avatarUrl: user.avatarurl,
    },
  });
};
module.exports = {
  login: ctrlWrapper(login),
};
