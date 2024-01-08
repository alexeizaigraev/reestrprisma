const {PrismaClient, prisma} = require('./db')
require('dotenv').config()

// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

async function f() {
  const user = await prisma.users.findMany()
  console.log(user)
}

//f()

const getdUserById = require('./prisma.methods/user').getUserById
const getAllUsers = require('./prisma.methods/user').getAllUsers
const getUserByEmailPassword = require('./prisma.methods/user').getUserByEmailPassword
const isUserExistsByEmail = require('./prisma.methods/user').isUserExistsByEmail
const getUserByPassword = require('./prisma.methods/user').getUserByPassword
const createOneUser = require('./prisma.methods/user').createOneUser
const updateUserById = require('./prisma.methods/user').updateUserById
const updateUser = require('./prisma.methods/user').updateUser
const getUser = require('./prisma.methods/user').getUser
const deleteUser = require('./prisma.methods/user').deleteUser



deleteUser({id: 4})


//getUser({id: 1})
//getUser({email: 'inna@mail.com'})

//createOneUser({name: 'inna', password: 'inna',  email: 'inna@mail.com', })
//updateUser({id: 2}, {name: 'jinna', password: 'jinna',  email: 'jinna@mail.com', })
//updateUserById(2, {name: 'inna'})
//getdUserById(2)
//getAllUsers()
//getUserByEmailPassword('inna@mail.com', 'inna')
//getUserByPassword('zinna')

// createOneUser(
//   email='inna@mail.com', 
//   password='inna'
// )

