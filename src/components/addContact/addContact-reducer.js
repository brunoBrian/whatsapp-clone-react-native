const INITIAL_STATE = {
  email: '',
  error: false, 
  loading: false,
  success: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_GET_EMAIL':
      return { ...state, email: action.payload };
    case 'ADD_CONTACT_HIDE_SUCCESS_MESSAGE':
      return { ...state, success: false, error: false, email: '' };
    case 'ADD_CONTACT_FAILED':
      return { ...state, error: action.payload, loading: false };
    case 'ADD_CONTACT_REQUEST':
      return { ...state, loading: true, error: false };
    case 'ADD_CONTACT_SUCCESS':
      return { ...state, error: false, loading: false, email: '', success: true };
    default:
      return state;
  }
}