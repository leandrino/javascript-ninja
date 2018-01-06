var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursola', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

const dogs =  animals.filter(animal => animal.species === 'dog')

console.log(dogs)

// const dogs = []
// animals.map(animal => animal.species === 'dog' &&  dogs.push(animal))

// console.log(dogs)
