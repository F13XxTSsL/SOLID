// Interface Segregation Principle
class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`)
  }
}
const flier = {
  fly() {
    console.log(`${this.name} умеет летать`)
  }
}
const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`)
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, walker, flier)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Собака')
dog.swim()
dog.walk()

const eagle = new Eagle('Орел')
eagle.walk()
eagle.fly()

const whale = new Whale('Дельфин')
whale.swim()
