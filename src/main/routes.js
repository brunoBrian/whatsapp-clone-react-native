import { createStackNavigator } from 'react-navigation';

import Welcome from '../components/welcome/welcome';
import Register from '../components/register/register-container';
import Login from '../components/login/login-container';

export default createStackNavigator({
  Login,
  Register,
  Welcome,
});