// Create with factory

const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

const sniffles = dog()

sniffles.talk()

// Create with class

class DogClass {
  constructor() {
    this.sound = 'woof'
  }

  talk() {
    console.log(this.sound)
  }
}

const ziggy = new DogClass()

ziggy.talk()
