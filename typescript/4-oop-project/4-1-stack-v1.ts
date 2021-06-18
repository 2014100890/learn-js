{
  class stack {
    box: string[] = []

    constructor() {
      this.box = []
    }
    push(str: String) {
      // 문자열일 때만
      this.box.push(str as string)
    }
    pop() {
      if (this.box.length <= 0) {
        throw new Error('stack is empty')
      }
      this.box.pop()
    }
    show() {
      if (this.box.length <= 0) {
        throw new Error('stack is empty')
      }
      this.box.forEach(elem => {
        console.log(elem)
      })
    }
  }
  const myStack = new stack()
  myStack.push('1번째')
  myStack.push('2번째')
  myStack.show()
  myStack.pop()
  myStack.show()
}
