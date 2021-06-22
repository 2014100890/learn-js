{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
    hasSugar?: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup // 이 함수를 이용할 수 있고 리턴타입은 이러이러하다.
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GTAMN_PER_SHOT = 7 // class level
    private coffeeBeans: number = 0 // instance (object) level

    constructor(coffeeBeans: number) {
      // 외부에서 오브젝트 생성 금지
      this.coffeeBeans = coffeeBeans
    }
    // constructor 사용하지 않을 경우, 내부 속성값 사용하지 않으므로 static
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0')
      }
      this.coffeeBeans += beans
    }
    clean() {
      console.log('cleaning the machine')
    }
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`)
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GTAMN_PER_SHOT) {
        throw new Error('Not enough coffee beans')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GTAMN_PER_SHOT
    }
    private preheat(): void {
      console.log('heating up...')
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... `)
      return { shots, hasMilk: false }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots)
      this.preheat()
      return this.extract(shots)
    }
  }

  class CaffeeLatteeMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans)
    }
    private steamMilk(): void {
      console.log('Steaming some milk... ')
    }
    makeCoffee(shots: number): CoffeeCup {
      // super 부모클래스에서 만든 함수를 사용하고자 할 경우
      const coffee = super.makeCoffee(shots)
      this.steamMilk()
      // 오버라이딩
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots)
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeeLatteeMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeeLatteeMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ]

  machines.forEach(machine => {
    console.log('================')
    machine.makeCoffee(1) // Interface에 있는 makeCoffee만 사용 가능 
  })
  //   const machine = new CoffeeMachine(23)
  //   const latteeMachine = new CaffeeLatteeMachine(23, 'SSSS')
  //   const coffee = latteeMachine.makeCoffee(1)
  //   console.log(coffee) // { shots: 1, hasMilk: true }
  //   console.log(latteeMachine.serialNumber)
}
