{
  type CoffeeCup = {
    shots: number
    hasMilk?: boolean
    hasSugar?: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup // 이 함수를 이용할 수 있고 리턴타입은 이러이러하다.
  }
  /*
   abstract이 붙으면 자체로는 오브젝트를 생성할 수 없음 
  */
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GTAMN_PER_SHOT = 7 // class level
    private coffeeBeans: number = 0 // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
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

    protected abstract extract(shots: number): CoffeeCup

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
    protected extract(shots: number): CoffeeCup {
      this.steamMilk()
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeeLatteeMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CaffeeLatteeMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ]

  machines.forEach(machine => {
    console.log('================')
    machine.makeCoffee(1) // Interface에 있는 makeCoffee만 사용 가능
  })
}
