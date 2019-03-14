const INITIAL_STATE = {
  email: '',
  password: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_EMAIL':
      return { ...state, email: action.payload };
    case 'GET_PASSWORD':
      return { ...state, password: action.payload };
    // case 'LOGIN_REQUEST':
    //   return { ...state, error: null, loginLoading: true, loginAnimation: true };
    // case 'LOGIN_SUCCESS':
      // return { ...state, loginData: action.payload, loginLoading: false };
    // case 'LOGIN_FAILED':
      // return { ...state, error: action.payload, loginData: null, loginLoading: false, loginAnimation: false };
    default:
      return state;
  }
}