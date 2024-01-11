const {PrismaClient, prisma} = require('../../db')


module.exports = async function createContact(dataPar) {
  console.log('createContact, dataPar=', dataPar)
  try {
    const contact = await prisma.contacts.create({
      data: dataPar,
    })
    // console.log(contact)
    return contact
  } catch(e) {
    console.log(e)
  }
}
