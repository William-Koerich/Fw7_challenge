const db = require('./db/index')

const products = db.product

const colors = products.colors.map(color => color)

const sizes = colors.map(size => size.sizes)

const quantityInStock = sizes.map(size => {
  const agrupedQuantityInStock = size.reduce((accumulator, current) => {
    const hasKey = accumulator.hasOwnProperty(current.size)

    const stock = hasKey
      ? [...accumulator[current.size], current.stock]
      : [current.stock]

    return {
      ...accumulator,
      [current.size]: stock
    }
  }, {})
  console.log(agrupedQuantityInStock)
})
