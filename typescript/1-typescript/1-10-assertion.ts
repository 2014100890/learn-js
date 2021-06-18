{
  /**
   * type assertions 👿 사용 지양
   */

  function jsStrFunc(): any {
    return 'hello'
  }
  const result = jsStrFunc()
  console.log((result as string).length)
  console.log((<string>result).length)

  function findNumbers(): number[] | undefined {
    return undefined
  }

  // undefined가 아니라고 확신한다면...?  ! 사용
  const numbers = findNumbers()
  numbers!.push(2); 

//   const numbers = findNumbers()!
//   numbers!.push(2); 
}
