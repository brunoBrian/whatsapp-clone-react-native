import { combineReducers } from 'redux';
import login from '../components/login/login-reducer';
import register from '../components/register/register-reducer';
import addContact from '../components/addContact/addContact-reducer';

const rootReducer = combineReducers({
  login,
  register,
  addContact
});

export default rootReducer;