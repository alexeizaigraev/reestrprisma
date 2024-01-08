// verify email
const updateUser = require('../../prisma.methods/user').updateUser
const getUserByVerifTokenSql = require('../../prisma.methods/user').getUserByVerifTokenSql

const { ctrlWrapper } = require("../../decorators");
const { HttpError } = require("../../helpers");
const verify = async (req, res) => {
  const { verificationToken } = req.params;
  console.log('verificationToken= ', verificationToken)

  const user = await getUserByVerifTokenSql(verificationToken);
  console.log('user= ', user)

  if (!user) {
    throw HttpError(404, "User not found");
  }

  const result = await updateUser({id: user.id}, {
    verify: true,
    verificationtoken: "",
  });
  console.log('result=', result)
  res.json({
    
    message: `Верификация прошла успешно. Зайдите в приложение под своим логином и паролем. Логин: "${user.email}"    `
    
 
  });
};

module.exports = {
  verify: ctrlWrapper(verify),
};
