// not currying

// let dragonOne = (name, size, element) =>
//   `${name} is a
//    ${size} dragon that breathes
//    ${element}!`

// console.log(dragonOne('fluffykins', 'tiny', 'fire'))

// Currying

const _ = require('lodash')

let dragon =
  name =>
    size =>
      element =>
        `${name} is a
         ${size} dragon that breathes
         ${element}!`

const fluffykinsDragon = dragon('fluffykins')
const tinyDragon = fluffykinsDragon('tiny')
console.log(tinyDragon('lightining'))

console.log(_.pad(' New Example ', 80, '='))

const dragons = [
  { name: 'Fluffykins', element: 'rainbow' },
  { name: 'Kira', element: 'rainbow' },
  { name: 'Foora', element: 'ice' },
  { name: 'Boxa', element: 'fire' }
]

const hasElement = _.curry((element, obj) => element === obj.element)

const rainbowDragon =
  dragons.filter(hasElement('rainbow'))

console.log(rainbowDragon)

