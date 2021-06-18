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

  /* unknown과 any 모두 모든 타입을 할당받을 수 있다. 
    하지만, 다른 점은 unknown은 사용할 때 타입을 확인해야 한다는 점이다. 
    unknown 타입으로 선언된 변수는 any를 제외한 
    다른 타입으로 선언된 변수에 할당될 수 없다는 것이다.
    ex) 
    let varibale : unknown
    let numberType : number = variable 
    타입을 좁혀서 사용한다. 

    x가 unknown타입이라서 뭔지 잘 모르겠으니까 너가 타입을 정확히 지정해줘 라고 말하는것과 같다.
    unknown은 무조건 타입을 좁혀서 사용해야 하는 의무가 있는 반면,
    any는 타입을 좁혀서 사용하지 않아도 되서 자유롭다는 차이점이 있다.

    */

  let maybe: unknown = 0
  maybe = '123'

  if (typeof maybe === 'string') {
    // typeof 연산자를 사용하여 타입을 확인한 뒤에도 타입을 명시하지 않아도 됨
    const text: string = maybe
    console.log(maybe)
  }

  let anything: any = 0
  anything = 'hello'

  let myVar: unknown = 'Dao'
  myVar = 42

  // 오류 : 변수의 타입이 명확하지 않으므로, number 타입 변수에 값 할당이 불가능
  // let age: number = myVar

  // unkwon type 변수 할당 시 타입 명시해주어야함
  // let age: number = myVar as number

  if (typeof myVar === 'number') {
    // typeof 연산자를 사용하여 타입을 확인한 뒤에도 타입을 명시하지 않아도 됨
    let age: number = myVar
    console.log(age)
  }

  // void : 함수에 아무것도 리턴하지 않는 경우
  function print(): void {
    console.log('hello')
    return
  }
  /* never : 함수에서 절대 리턴할 수 없는 경우
    에러를 던지던지, while True 처럼 계속 돌아가는 경우 
  */
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message)
    // while(true){

    // }
  }
  // object 어떠한 Object도 전달받을 수 있음.
  let obj: object

  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: '흑기사' })
  acceptSomeObject({ category: 'speed' })
}
