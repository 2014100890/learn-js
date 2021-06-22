{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  // public 기본
  // private 외부에서 볼 수도, 접근할 수도 없음
  // protected 상속 시 외부에서는 접근할 수 없지만, 상속한 자식클래스에서는 접근할 수 있움
  class CoffeeMaker {
    private static BEANS_GTAMN_PER_SHOT = 7 // class level
    private coffeeBeans: number = 0 // instance (object) level

    private constructor(coffeeBeans: number) {
      // 외부에서 오브젝트 생성 금지
      this.coffeeBeans = coffeeBeans
    }
    // constructor 사용하지 않을 경우, 내부 속성값 사용하지 않으므로 static
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0')
      }
      this.coffeeBeans += beans
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
  //   const maker = new CoffeeMaker(32)
  const maker = CoffeeMaker.makeMachine(32)
  //   maker.coffeeBeans = 3 // 외부에서 값을 바꿔버릴 수 있음 캡슐화 ㄲ
  maker.fillCoffeeBeans(3)

  //   class User {
  //     firstName: string
  //     lastName: string
  //     fullName: string
  //     constructor(firstName: string, lastName: string) {
  //       ;(this.firstName = firstName),
  //         (this.lastName = lastName),
  //         (this.fullName = `${firstName} ${lastName}`)
  //     }
  //   }
  //   const user = new User('steve', 'jobs')
  //   console.log(user.fullName) // steve jobs
  //   user.firstName = 'Ellie'
  //   console.log(user.fullName) // steve jobs ???

  class User {
    get fullName(): string {
      // 호출 시점으로 변경
      return `${this.firstName} ${this.lastName}`
    }
    private internalAge = 4
    get age(): number {
      return this.internalAge
    }
    set age(num: number) {
      if (num < 0) {
        throw Error('invalid age')
      }
      this.internalAge = num
    }
    // constructor 인자로 넣으면 멤버변수로 사용 가능
    constructor(private firstName: string, private lastName: string) {
      ;(this.firstName = firstName), (this.lastName = lastName)
    }
  }
  const user = new User('steve', 'jobs')
  console.log(user.fullName) // steve jobs
  user.age = 6 // 멤버변수인 internal age 대신 age로 값을 바꿈
  //   user.firstName = 'Ellie'
  console.log(user.fullName) // Ellie jobs
}
