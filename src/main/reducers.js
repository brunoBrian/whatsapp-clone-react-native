import { combineReducers } from 'redux';
import login from '../components/login/login-reducer';
import register from '../components/register/register-reducer';
import addContact from '../components/addContact/addContact-reducer';
import contacts from '../components/contacts/contacts-reducer';
import conversation from '../components/conversations/conversations-reducer';
import listConversation from '../components/list-conversations/list-conversations-reducer';

const rootReducer = combineReducers({
  login,
  register,
  addContact,
  contacts,
  conversation,
  listConversation
});

export default rootReducer;