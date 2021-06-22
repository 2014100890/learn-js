// 호출한 것의 문맥
console.log(this) // Window

function simpleFunc() {
  console.log(this)
}

simpleFunc() // Window
window.simpleFunc()

// class Counter {
//   count = 0
//   increase = function () {
//     console.log(this)
//   }
// }

// arrow function으로 함수를 정의하면, 따로 바인딩을 해주지 않아도 된다.
class Counter {
  count = 0
  increase = () => {
    console.log(this)
  }
}

const counter = new Counter()
counter.increase() // Counter

const caller = counter.increase
caller() // undefined
// let, const로 선언된 변수는 window에 등록되어 지지 않음
// 변수는 글로벌 객체에 등록 불가 ex) window.ellie X

// 정보를 잃어버리지 않으려면 바인딩을 해주어야 한다.
// 선언 될 당시의 scope를 유지
const caller = counter.increase.bind(counter) // Counter
// var window 등록
var badVar = 'bad'
class Bob {}
const bob = new Bob()
bob.run = counter.increase
bob.run() // Bob
