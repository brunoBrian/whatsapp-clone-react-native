import { combineReducers } from 'redux';
import login from '../components/login/login-reducer';
import cadastro from '../components/cadastro/cadastro-reducer';

const rootReducer = combineReducers({
  login,
  cadastro
});

export default rootReducer;