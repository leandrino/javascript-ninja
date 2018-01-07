class Robot {
  killer() { console.log('killer') }
  driver() { console.log('driver') }
}

class murderRobotDogClass extends Robot {
  bark() { console.log('woof') }
}

class Animal {
  poop() { console.log('poop') }
}

class Dog extends Animal {
  bark() { console.log('woof') }
}

class Cat extends Animal {
  meow() { console.log('meow') }
}

const myDog = new Dog()

myDog.poop()
myDog.bark()


// solutions with compositions examples

const barker = (state) => ({
  bark: () => console.log(`Woof, I am ${state.name}!`)
})

const driver = (state) => ({
  drive: () => state.position = state.position + state.sepeed
})

const killer = (state) => ({
  kill: () => console.log(state.power)
})

barker({ name: 'Karo' }).bark()

const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
    power: 100
  }

  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state)
  )
}

const compositeDog = name => {
  let state = {
    name
  }

  return Object.assign(
    {},
    barker(state)
  )
}

murderRobotDog('Sniffles').bark()
compositeDog('Ziggy').bark()
