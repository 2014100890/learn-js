{
  // (new) head -> value -> value (old)
  interface Stack {
    readonly size: number
    push(value: string): void
    pop(): string
  }

  // readonly로 불변성 유지
  type StackNode = {
    readonly value: string
    readonly next?: StackNode // ?는 | undefined 생략
  }

  class StackImpl implements Stack {
    private _size: number = 0 // 내부에서 쓰이는 변수 _ 붙임
    private head?: StackNode

    get size() {
      return this._size
    }
    push(value: string) {
      const node: StackNode = { value, next: this.head }
      this.head = node
      this._size++
    }
    pop(): string {
      if (this.head == null) {
        // null undefined 다 처리
        throw new Error('Stack is empty')
      }
      const node = this.head
      this.head = node.next
      this._size--
      return node.value
    }
  }
  const stack = new StackImpl()
  stack.push('1번째')
  stack.push('2번째')
  stack.push('3번째')
  while (stack.size !== 0) {
    console.log(stack.pop())
  }
}
