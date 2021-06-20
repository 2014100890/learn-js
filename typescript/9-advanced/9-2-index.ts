{
  const obj = {
    name: 'neo',
  }
  obj.name // neo
  obj['name'] // neo

  type Animal = {
    name: string
    age: number
    gender: 'male' | 'female'
  }

  type Name = Animal['name'] // String
  const text: Name = 'hello'

  type Gender = Animal['gender'] // 'male' | 'female'

  type keys = keyof Animal // 'name' | 'age'| 'gender'
  const key: keys = 'gender'

  type Person = {
    name: string
    gender: Animal['gender']
  }

  const person: Person = {
    name: 'LBK',
    gender: 'male',
  }
}
