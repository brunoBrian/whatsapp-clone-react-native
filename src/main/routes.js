import { createStackNavigator } from 'react-navigation';

import Cadastro from '../components/cadastro/cadastro-container';
import Login from '../components/login/login-container';

export default createStackNavigator({
  Login,
  Cadastro,
});