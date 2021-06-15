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

  const numbers = findNumbers()
}
