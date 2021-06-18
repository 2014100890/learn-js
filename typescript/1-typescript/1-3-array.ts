{
  // Array 한 가지 타입만 담을 수 있음
  const fruits: string[] = ['🍑', '🍐']
  const score: Array<number> = [1, 3, 4]

  // string[] 로 작성할 때만 readonly 사용 가능 (object의 불변성 보장)
  function printArray(fruits: readonly string[]) {}

  // Tuple 서로 다른 타입을 가질 수 있음
  // interface, type alias, class 로 대체해서 사용해야함.
  let student: [string, number]
  student = ['name', 123]
  // 가독성이 좋지 않음.
  //   student[0];
  const [name, age] = student

  
}
