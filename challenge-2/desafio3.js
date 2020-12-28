const db = require('./db/index')

const arrayToSort = db
  .map(array => ({
    nome: array.name,
    data: array.created_at
  }))
  .sort((a, b) => {
    return (a.data < b.data) - 1
  })

console.log(arrayToSort)
