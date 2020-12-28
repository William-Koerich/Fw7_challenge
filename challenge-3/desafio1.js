const db = require('./db/index')

const colors = db.colors

const separateColorByStatus = colors.reduce(
  (accumulator, color) => {
    const status = color.isAvailable ? 'unavailables' : 'availables'

    return {
      ...accumulator,
      [status]: [...accumulator[status], color]
    }
  },
  {
    unavailables: [],
    availables: []
  }
)

console.log(separateColorByStatus)
