const db = require('./db/index')

const users = db.map(user => user.name).sort()

console.log(users)
