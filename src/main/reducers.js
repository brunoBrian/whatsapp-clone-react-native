import { combineReducers } from 'redux';
import login from '../components/login/login-reducer';
import register from '../components/register/register-reducer';
import addContact from '../components/addContact/addContact-reducer';
import contacts from '../components/contacts/contacts-reducer';

const rootReducer = combineReducers({
  login,
  register,
  addContact,
  contacts
});

export default rootReducer;