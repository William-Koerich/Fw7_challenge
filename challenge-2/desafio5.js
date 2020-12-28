const db = require('./db/index')

const usersWith10PublicRepoOrMore = db
  .map(user => ({
    name: user.name,
    publicRepos: user.public_repos
  }))
  .filter(
    userWithMore10PublicRepositories =>
      userWithMore10PublicRepositories.repos > 10
  )
  .sort((a, b) => {
    return (a.repos < b.repos) - 1
  })

console.log(usersWith10PublicRepoOrMore)
