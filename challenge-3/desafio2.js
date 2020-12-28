const db = require('./db/index')

const words = db.words

const palindrome = words.filter(word => {
  const minuscule = word.toLowerCase()
  return minuscule == minuscule.split('').reverse().join('')
})

console.log(palindrome)
