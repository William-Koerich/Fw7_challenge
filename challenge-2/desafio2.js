const db = require('./db/index')

const totalPublicRepositories = db.reduce(
  (accumulator, repositories) => accumulator + repositories.public_repos,
  0
)

console.log(totalPublicRepositories)
