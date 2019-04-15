const INITIAL_STATE = {
  contactsData: [],
  error: 'true',
  loading: false,
  activeContactClicked: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CONTACT_LIST':
      return { ...state, contactsData: action.payload };
    case 'CONTACT_LIST_FAILED':
      return { ...state, success: false, error: false, email: '' };
    case 'CONTACT_LIST_SUCCESS':
      return { ...state, error: action.payload, loading: false };
    case 'CONTACT_LIST_REQUEST':
      return { ...state, loading: true, error: false };
    case 'GET_NAME_EMAIL_CLICKED':
      return { ...state, activeContactClicked: action.payload };
    default:
      return state;
  }
}