const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


module.exports = {
  PrismaClient,
  prisma
}

module.export = prisma