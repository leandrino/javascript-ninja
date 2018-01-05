// The Basic Object

let dog = {
  sound: 'woof',
  talk: function() {
    console.log(this.sound)
  }
}

dog.talk()

let talkingFunction = dog.talk
let boudFunction = talkingFunction.bind(dog)

boudFunction()

const button = document.querySelector('#button-awesome')

button.addEventListener('click', dog.talk.bind(dog))
