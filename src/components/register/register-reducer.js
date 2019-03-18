const INITIAL_STATE = {
  name: '',
  error: false, 
  loading: false,
  password: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_NAME':
      return { ...state, name: action.payload };
    case 'REGISTER_GET_PASSWORD':
      return { ...state, password: action.payload };
    case 'REGISTER_USER_REQUEST':
      return { ...state, loading: true, error: false };
    case 'REGISTER_USER_SUCCESS':
      return { ...state, error: false, loading: false, password: '', name: '' };
    case 'REGISTER_USER_FAILED':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}