//const getAllContacts = require('../../prisma.methods/contact/getAllContacts')
const {PrismaClient, prisma} = require('../../db')
const { ctrlWrapper } = require("../../decorators");

const getAllContacts = async (req, res) => {
  
  const { id: owner, status: status, email } = req.user;
  console.log('req.user=', req.user)
  
  // const { page = 1, limit = 20, favorite } = req.query;
  // const { page0, limit = 2 } = req.query;

  const limit = 2
  const page = req.body.page
  console.log("req.body", req.body)
  console.log('page=', page, typeof page)
  const skip = (page - 1) * limit;


  let result;

  if (status === 'admin') {
    // Если статус пользователя - admin, получаем все записи
    result = await prisma.contacts.findMany({
      skip,
      take: limit,
    })
    // result = await prisma.contacts.findMany()
  } else {
    // Если статус пользователя не admin, получаем записи, где email соответствует email пользователя
    result = await prisma.contacts.findMany({
      skip,
      take: limit,
      where: {
        email: email
      }
    })
  }
  console.log('email=', email)
  res.json(result);
};

// Model.find({}, (error, results) => {
//   if (error) {
//       console.log('Ошибка:', error);
//   } else {
//       console.log('Результаты поиска:', results);
//   }
// });

//   const result = await Contact.find(
//     favorite ? { owner, favorite } : { owner },
//     "-createdAt -updatedAt",
//     {
//       skip,
//       limit: Number(limit),
//     }
//   ).populate("owner", "email subscription");

//   res.json(result);
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
};
