{
  /**
   * Type Inference
   */
  // 선언함과 동시에 문자열 할당. string으로 타입 유추
  let text = 'hello'
  text = 'hi' // text = 1 불가

  //   function print(message) { // any로 추론
  //     console.log(message)
  //   }
  function print(message = 'hello') {
    // string 추론
    console.log(message)
  }

  function add(x: number, y: number) {
    return x + y
  }
  const result = add(1, 2)
}
