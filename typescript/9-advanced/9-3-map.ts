{
  type Video = {
    title: string
    author: string
    description: string
  }
  //   [1,2].map(item => item * item) // [1,4]
  type Optional<T> = {
    [P in keyof T]?: T[P] // for ... in Object에 있는 key를 돌 수 있음
  }

  type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P]
  }
  type VideoOptional = Optional<Video>
  const videoOp: VideoOptional = {
    title: 'hi',
  }

  type Animal = {
    name: string
    age: number
  }

  const animal: Optional<Animal> = {
    name: 'dog',
  }

  type Nullable<T> = { [P in keyof T]: T[P] | null }

  const obj2: Nullable<Video> = { title: null, author: null }

  type Proxy<T> = {
    get(): T
    set(value: T): void
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
  }
}
