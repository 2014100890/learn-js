{
  /*
   * Union Types : OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down'

  //   function move(direction: Direction) {
  //     console.log(direction)
  //   }
  move('right')

  type TileSize = 8 | 16 | 32
  const tile: TileSize = 16

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string
    }
  }
  type FailState = {
    reason: string
  }

  type LoginState = SuccessState | FailState
}
//   function login(id: string, password: string): LoginState {
//     return {
//       response: {
//         body: 'logged in!',
//       },
//     }
//   }
//   // printLoginState(state)
//   // success -> 🎉 body
//   // fail -> 😂 reason

//   function printLoginState(state: LoginState) {
//     if ('response' in state) {
//       // response라는 key가 있다면
//       console.log(`🎉 ${state.response.body}`)
//     } else {
//       console.log(`😂 ${state.reason}`)
//     }
//   }
// }
