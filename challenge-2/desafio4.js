const db = require('./db/index')

const biggerName = db.reduce(
  (accumulator, user) =>
    user.name.length > accumulator.length ? user.name : accumulator,
  db[0].name
)
console.log(biggerName)
