{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup // 이 함수를 이용할 수 있고 리턴타입은 이러이러하다.
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
    fillCoffeeBeans(beans: number): void
    clean(): void
  }

  // 외부에서 함수에 대해 잘 몰라도 사용 가능
  // 정보 은닉(private) 을 통한 추상화
  // 인터페이스를 구현하는 클래스다
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GTAMN_PER_SHOT = 7 // class level
    private coffeeBeans: number = 0 // instance (object) level

    private constructor(coffeeBeans: number) {
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

  // private 선언하지 않은 함수만 사용할 수 있게 하여 간단하게 한 추상화
  const maker1: CoffeeMachine = CoffeeMachine.makeMachine(32)
  maker1.fillCoffeeBeans(32)
  maker1.makeCoffee(2)

  // interface 얼마만큼의 함수를 사용할 것인지 결정
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32)
  //   maker2.fillCoffeeBeans(3) 불가
  maker2.makeCoffee(2)

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32)
  maker3.makeCoffee(2)
  maker3.clean()

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2)
      console.log(coffee)
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2)
      console.log(coffee)
      this.machine.fillCoffeeBeans(45)
      this.machine.clean()
    }
  }
  // 인터페이스에 규약된 함수들만 고려하면 됨. 
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32)
  const amateur = new AmateurUser(maker)
  const pro = new ProBarista(maker)
  amateur.makeCoffee()
  pro.makeCoffee()
}
