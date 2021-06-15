{
  /*
   * Type Aliases : 새로운 타입을 지정
   */
  type Text = string
  const name: Text = 'ellie'
  type Num = number

  type Student = {
    name: string
    age: number
  }
  const student: Student = {
    name: 'elie',
    age: 12,
  }
  /* 
    String Literal Types
  */
  type Name = 'name'
  let ellieNmae: Name
  ellieNmae = 'name'
}
