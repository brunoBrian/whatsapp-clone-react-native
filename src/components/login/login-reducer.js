const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_EMAIL':
      return { ...state, email: action.payload };
    case 'GET_PASSWORD':
      return { ...state, password: action.payload };
    case 'LOGIN_CLEAN_PASSWORD':
      return { ...state, password: '', error: false };
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: false };
    case 'LOGIN_SUCCESS':
      return { ...state, error: false, loading: false };
    case 'LOGIN_FAILED':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}