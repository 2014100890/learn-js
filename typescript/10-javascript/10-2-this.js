// 호출한 것의 문맥
console.log(this) // Window

function simpleFunc() {
  console.log(this)
}

simpleFunc() // Window
window.simpleFunc()

class Counter {
  count = 0
  increase = function () {
    console.log(this)
  }
}

const counter = new Counter()
counter.increase() // Counter

const caller = counter.increase
caller() // undefined
// let, const로 선언된 변수는 window에 등록되어 지지 않음
// 변수는 글로벌 객체에 등록 불가 ex) window.ellie X

// var window 등록
var badVar = 'bad'
class Bob {}
const bob = new Bob()
bob.run = counter.increase
bob.run()
