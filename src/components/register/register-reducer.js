const INITIAL_STATE = {
  name: '',
  success: '',
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_NAME':
      return { ...state, name: action.payload };
    case 'REGISTER_USER_REQUEST':
      return { ...state, name: action.payload };
    case 'REGISTER_USER_SUCCESS':
      return { ...state, success: action.payload, error: '' };
    case 'REGISTER_USER_FAILED':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}