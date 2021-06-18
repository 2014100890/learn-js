// type Interface 모두 object 정의 가능
// class 구현 가능
{
  type PositionType = {
    x: number
    y: number
  }

  interface PositionInterface {
    x: number
    y: number
  }

  interface PositionInterface {
    z: number
  }
  // 둘다 object 형태로 만들 수 있다.
  const obj1: PositionType = {
    x: 1,
    y: 2,
  }
  const obj2: PositionInterface = {
    x: 1,
    y: 2,
  }
  // 둘다 class에서 구현이 가능하다.
  class Pos1 implements PositionType {
    x: number
    y: number
  }
  class Pos2 implements PositionInterface {
    x: number
    y: number
    z: number
  }

  // 상속을 통해 새로운 interface를 확장해보자
  interface ZPostionInterface extends PositionInterface {
    z: number
  }
  // type은 intersection을 통해서 새로운 타입을 만들 수 있음
  type ZPositionType = PositionType & { z: number }

  // interface만 결합이 된다.
}
