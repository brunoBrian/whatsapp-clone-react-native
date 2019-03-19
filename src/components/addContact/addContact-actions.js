export const addContact = navigation => {
  return (dispatch, getState) => {

    dispatch(addContactRequest());
  }
}

export const getEmail = payload => ({
  type: 'ADD_CONTACT_GET_EMAIL',
  payload
});

const addContactRequest = () => ({
  type: 'ADD_CONTACT_REQUEST',
});

const addContactSuccess = () => ({
  type: 'ADD_CONTACT_SUCCESS',
});

const addContactFailed = payload => ({
  type: 'ADD_CONTACT_FAILED',
  payload
});