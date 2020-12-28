const db = require('./db/index')

const animals = db.animals

const panda = 'Panda'

/**
 * Confesso que o exemplo da imutabilidade do blog me ajudou muito.
 */

const arrayWithPanda = [...new Set([animals[0], panda, ...animals])]

console.log(arrayWithPanda)
