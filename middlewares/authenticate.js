const getUser = require('../prisma.methods/user').getUser
const updateUser = require('../prisma.methods/user').updateUser

const jwt = require("jsonwebtoken");

const { HttpError } = require("../helpers");

//const { User } = require("../models/user");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  // console.log("autentificate starting...")
  const { authorization = "" } = req.headers;
  // console.log("req.headers", req.headers)

  const [bearer, token] = authorization.split(" ");
  // console.log("bearer, token", bearer, token)
  if (bearer !== "Bearer" || !token) {
    next(HttpError(401, "Not authorized *"));
  }
  try {
    // console.log("token", token)
    // console.log('SECRET_KEY', SECRET_KEY)
    const { id } = jwt.verify(token, SECRET_KEY);

    const decoded = jwt.verify(token, SECRET_KEY)
    // console.log('decoded=', decoded)
    // console.log("id", id)
    // console.log("jwt.verify(token, SECRET_KEY)", jwt.verify(token, SECRET_KEY))
    const user = await getUser({id: id});
    // console.log("autentificate,  user=", user)

    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = authenticate;
