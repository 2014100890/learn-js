// 상속을 위해 사용하는 prototype
/* 
    Prototype-based Programming
    a style of OOP
    behavior reuse (inheritance)
    by reusing existing objects 
    that serve as prototype
*/
const x = {}
const y = {}
console.log(x) // __proto__ : objects
// 모든 object는 prototype이란 object를 상속한다
console.log(y)
console.log(x.__proto__ === y.__proto__) // true

const array = []
console.log(array) // array -> Array -> Object

function CoffeeMachine(beans) {
  this.beans = beans
  // Instance member level
  //   this.makeCoffee = shots => {
  //     console.log('making ...')
  //   }
}
// prototype memeber level
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('making ... ')
}

const machine1 = new CoffeeMachine(10) // CoffeeMachine{beans:10}
const machine2 = new CoffeeMachine(20) // CoffeeMachine{beans:20}

console.log(machine1)
console.log(machine2)

function LatteeMachine(milk) {
  this.milk = milk
}
LatteeMachine.prototype = Object.create(CoffeeMachine.prototype)
const latteeMachine = new LatteeMachine(123)

console.log(latteeMachine)
latteeMachine.makeCoffee()
