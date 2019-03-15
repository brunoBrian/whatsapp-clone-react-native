import { combineReducers } from 'redux';
import login from '../components/login/login-reducer';
import register from '../components/register/register-reducer';

const rootReducer = combineReducers({
  login,
  register
});

export default rootReducer;