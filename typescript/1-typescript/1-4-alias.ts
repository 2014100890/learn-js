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
    문자열도 타입으로 지정하기 
  */
  type Name = 'name'
  let ellieNmae: Name
  ellieNmae = 'name'

  type Boal = true; 
  const isCat: Boal = true; 

  
}
