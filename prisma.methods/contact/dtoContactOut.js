module.exports = function dtoContactOut(ob) {
  console.log('function dtoContactOut starts...')
  if ( ob.hasOwnProperty("nnumber") ) {
    console.log('1', ob)
    ob.number = ob.nnumber
    console.log('2', ob)
    delete ob.nnumber
    console.log('3', ob)
  }
  
  if ( ob.hasOwnProperty("avatarurl") ) {
    console.log('1', ob)
    ob.avatarUrl = ob.avatarurl
    console.log('2', ob)
    delete ob.avatarurl
    console.log('3', ob)
  }

  if ( ob.hasOwnProperty("id") ) {
    console.log('1', ob)
    ob._id = String(ob.id)
    console.log('2', ob)
    delete ob.id
    console.log('3', ob)
  }
  console.log('function dtoContactOut return=', ob)
  return ob
}