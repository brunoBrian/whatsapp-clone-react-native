const INITIAL_STATE = {
  message: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return { ...state, message: action.payload };
    case 'CLEAN_MESSAGE':
      return { ...state, message: '' };
    default:
      return state;
  }
}