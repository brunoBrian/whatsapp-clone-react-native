const INITIAL_STATE = {
  contactsData: [],
  error: 'true',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LIST_CONTACT':
      return { ...state, contactsData: action.payload };
    case 'LIST_CONTACT_FAILED':
      return { ...state, success: false, error: false, email: '' };
    case 'LIST_CONTACT_SUCCESS':
      return { ...state, error: action.payload, loading: false };
    case 'LIST_CONTACT_REQUEST':
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
}