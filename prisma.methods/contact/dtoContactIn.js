module.exports = function dtoContactIn(ob) {
  console.log('function dtoContactIn starts...')
  if ( ob.hasOwnProperty("number") ) {
    console.log('1', ob)
    ob.nnumber = parseInt(ob.number)
    console.log('2', ob)
    delete ob.number
    console.log('3', ob)
  }
  
  if ( ob.hasOwnProperty("avatarUrl") ) {
    console.log('1', ob)
    ob.avatarurl = ob.avatarUrl
    console.log('2', ob)
    delete ob.avatarUrl
    console.log('3', ob)
  }
  
  if ( ob.hasOwnProperty("_id") ) {
    console.log('1', ob)
    ob.id = parseInt(ob._id)
    console.log('2', ob)
    delete ob._id
    console.log('3', ob)
  }
  console.log('function dtoContactIn return=', ob)
  return ob
}
