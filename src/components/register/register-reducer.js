const INITIAL_STATE = {
  name: '',
  error: false, 
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_NAME':
      return { ...state, name: action.payload };
    case 'REGISTER_USER_REQUEST':
      return { ...state, loading: true };
    case 'REGISTER_USER_SUCCESS':
      return { ...state, error: false, loading: false };
    case 'REGISTER_USER_FAILED':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}