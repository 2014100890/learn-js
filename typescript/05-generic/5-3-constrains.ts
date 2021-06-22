{
  interface Employee {
    pay(): void
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time')
    }
    workFullTime() {}
  }
  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time')
    }
    workFullTime() {}
  }

  function pay<T extends Employee>(employee: T): T {
    // pay 함수가 있는지 없는지 알 수 없음
    employee.pay()
    return employee
  }

  const neo = new FullTimeEmployee()
  const bob = new PartTimeEmployee()

  const neoAfterPay = pay(neo) // Employee로 리턴되버림
  const bobAfterPay = pay(bob) // Employee로 리턴되버림

  const obj1 = {
    name: 'tomato',
    age: 6,
  }
  const obj2 = {
    animal: '🐸',
  }

  function getValue<O, K extends keyof O>(obj: O, key: K): O[K] {
    return obj[key]
  }
  console.log(getValue(obj1, 'name')) // tomato
  console.log(getValue(obj1, 'age')) // 6
  console.log(getValue(obj2, 'animal')) // 6
}
