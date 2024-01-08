require('dotenv').config()
const { func } = require('joi')
const db = require('./db')

/*
none, one, oneOrNone, many, manyOrNone = any
*/
async function myPgPromise(mod, query, vec = [] ) {
  return new Promise((resolve, reject) => {
    let p
    try {
      switch (mod) {
        case 'none':
          p = db.none(query, vec)
          break
        case 'one':
          p = db.one(query, vec)
          break
        case 'oneOrNone':
          p = db.oneOrNone(query, vec)
          break
        case 'many':
          p = db.many(query, vec)
          break
        case 'any':
          p = db.any(query, vec)
          break
        case 'manyOrNone':
          p = db.manyOrNone(query, vec)
          break            
      }
      resolve(p)
    } catch (error) {
      reject(error)
    }
  }) 
} 
 
const q = `select * from users where id > $1`

const p = myPgPromise('any', q, [3])
  p.then(data => console.log(data))
