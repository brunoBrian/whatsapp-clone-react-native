const INITIAL_STATE = {
  contactListData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CONTACTS_LIST':
      return { ...state, contactListData: action.payload };
    default:
      return state;
  }
}