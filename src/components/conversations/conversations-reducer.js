const INITIAL_STATE = {
  inputMessage: '',
  messagesData: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INPUT_MESSAGE':
      return { ...state, inputMessage: action.payload };
    case 'CLEAN_INPUT_MESSAGE':
      return { ...state, inputMessage: '' };
    case 'GET_MESSAGES_CONVERSATION':
      return { ...state, messagesData: action.payload };
    default:
      return state;
  }
}