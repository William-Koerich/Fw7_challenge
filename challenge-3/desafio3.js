const db = require('./db/index')

const fruits = db.fruits

const fruitsWithoutRepeat = fruits
  .map(fruit => fruit)
  .filter((value, index, self) => self.indexOf(value) === index)

console.log(fruitsWithoutRepeat)
