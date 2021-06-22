{
  // ? optional : 인자를 전달해도 될 수도 있음. undefined도 가능
  function printName(firstName: string, lastName?: string) {
    console.log(firstName)
    console.log(lastName) // undefined
  }

  // default parameter
  function printMessage(message: string = 'default message') {
    console.log(message)
  }
  printMessage()

  // Rest parameter
  // 내가 원하는 숫자만큼
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b)
  }
  console.log(addNumbers(1, 2))
  console.log(addNumbers(1, 2, 3))
  console.log(addNumbers(1, 2, 3, 4))
}
