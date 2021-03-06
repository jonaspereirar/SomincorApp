export function signInRequest(number, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { number, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, number, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, number, email, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
