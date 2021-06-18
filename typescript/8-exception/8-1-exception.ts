// Java: Exception
// JavaScript: Error

{
  // const array = new Array(100000000000000000) // Error 예상하지 못함
  // Error(Exception Handling): try -> catch -> finally

  function readFile(fileName: string): string {
    if (fileName === 'not exist') {
      throw new Error(`file not exist!!!! ${fileName}`)
    }
    return 'file contents'
  }

  function closeFile(fileName: string) {}

  const fileName = 'not exist'
  //   console.log(readFile(fileName))

  //   try {
  //     console.log(readFile(fileName))
  //   } catch (error) {
  //     console.log(`catched!!!!`)
  //   } finally { // try, catch 실행 여부 상관없이 항상 실행된다.
  //     closeFile(fileName)
  //     console.log('finally')
  //   }

  function run() {
    const fileName = 'not exist'
    try {
      console.log(readFile(fileName))
    } catch (error) {
      console.log(`catched!!!!`)
    }
    closeFile(fileName)
    console.log('finally')
  }
  run()
}
