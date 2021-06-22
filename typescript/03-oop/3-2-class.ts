{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  class CoffeeMaker {
    static BEANS_GTAMN_PER_SHOT = 7 // class level
    coffeeBeans: number = 0 // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
    }
    // constructor 사용하지 않을 경우, 내부 속성값 사용하지 않으므로 static
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GTAMN_PER_SHOT) {
        throw new Error('Not enough coffee beans')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GTAMN_PER_SHOT
      return {
        shots,
        hasMilk: false,
      }
    }
  }
  const maker = new CoffeeMaker(32)
  console.log(maker) // static 변수  출력 X CoffeeMaker { coffeeBeans: 32 }
  const make3 = CoffeeMaker.makeMachine(3) // 외부에서 class level 접근 가능
}
