import { createStackNavigator } from 'react-navigation';

import Register from '../components/register/register-container';
import Login from '../components/login/login-container';

export default createStackNavigator({
  Login,
  Register,
});