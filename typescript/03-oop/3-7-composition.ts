import { DH_NOT_SUITABLE_GENERATOR } from 'node:constants'

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

    constructor(
      coffeeBeans: number,
      private milk: milkFrother,
      private sugar: SugarProvider
    ) {
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... `)
      return { shots, hasMilk: false }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots)
      this.preheat()
      const coffee = this.extract(shots)
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded)
    }
  }

  interface milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk...  🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 싸구려 우유 거품기
  class FancyMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...  🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log('Cold Steaming some milk...  🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class NoMilk implements milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy 🍭')
      return true
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar()
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  // 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar 🍭')
      return true
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar()
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  // milk
  const cheapMilkMaker = new CheapMilkSteamer()
  const fancyMilkMaker = new FancyMilkSteamer()
  const coldMilkMaker = new ColdMilkSteamer()
  const noMilk = new NoMilk()
  // sugar
  const candySugar = new CandySugarMixer()
  const sugar = new SugarMixer()
  const nosugar = new NoSugar()
  //
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar)
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar)
  //
  const latteeMachine = new CoffeeMachine(12, cheapMilkMaker, nosugar)
  const coldlatteeMachine = new CoffeeMachine(12, coldMilkMaker, nosugar)
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar)
}
