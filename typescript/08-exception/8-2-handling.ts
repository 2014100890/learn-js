{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network')
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect()
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 애플리케이션 내부에서 에러 처리하는 것이 더 우아한 처리 방법
      try {
        this.userService.login()
      } catch (error) {
        // catch로 에러를 받는 순간 any 타입이 되어버림
        // instanceof 보다 Error State를 사용해보자
        console.log('cathched')
        // if(error instanceof O)
      }
    }
  }
  const client = new NetworkClient()
  const service = new UserService(client)
  const app = new App(service)
  app.run()
}
