{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success'
    response: {
      body: string
    }
  }
  type FailState = {
    result: 'fail'
    reason: string
  }

  type LoginState = SuccessState | FailState

  function login(id: string, password: string): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    }
  }
  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 😂 reason

  //   function printLoginState(state: LoginState) {
  //     if ('response' in state) {
  //       // response라는 key가 있다면
  //       console.log(`🎉 ${state.response.body}`)
  //     } else {
  //       console.log(`😂 ${state.reason}`)
  //     }
  //   }
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      // response라는 key가 있다면
      console.log(`🎉 ${state.response.body}`)
    } else {
      console.log(`😂 ${state.reason}`)
    }
  }
}
