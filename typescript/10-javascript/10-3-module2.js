// import add from './10-3-module1.js'
// default 아닌 모듈도 불러오기
// import add, {print as printmessage} ...

import * as calculator from './10-3-module1.js'

console.log(calculator.add(3, 4))
console.log(calculator.number)
// console.log(calculator.add(3,4))
