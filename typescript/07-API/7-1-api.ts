{
  type Student = {
    passed: boolean
  }
  const students: Student[] = [{ passed: true }, { passed: true }]
  // every : 하나라도 만족하지 않으면 false
  const result = students.every(student => {
    return student.passed
  })
  console.log(result)

  class Animal {}
  class Cat extends Animal {
    isCat: boolean = true
  }
  class Dog extends Animal {
    isDog: boolean = false
  }

  const animals: Animal[] = [new Cat(), new Cat(), new Dog()]

  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined
  }
  animals.every<Cat>(isCat)
}
