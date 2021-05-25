{
  // Javascript
  // var 호이스팅 등의 문제로 사용하지말자
  // let 재 할당 가능
  let name = 'hello'
  name = 'hi'

  // const
  const age = 5
  // age = 3 불가

  /**
   * Javascript
   * Primitive : number, string, boolean, bigint, symbol, null, undefined
   * Object : function, array
   */

  // number
  const num: number = 1
  // string
  const str: string = 'hello'
  // boolean
  const boal: boolean = false
  // undefiend 비어있는지, 안비어져있는지 모름
  // let grade : undefined
  let grade: number | undefined
  // null 값은 비어있다.
  // let person : null
  let person: string | null

  function find(): number | undefined {
    return 1
  }
}
