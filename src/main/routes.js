import { createStackNavigator } from 'react-navigation';

import Welcome from '../components/welcome';
import Register from '../components/register/register-container';
import Login from '../components/login/login-container';
import Main from '../components/main/main';
import AddContact from '../components/addContact/addContact';

export default createStackNavigator({
  // Login,
  // Register: {
  //   screen: Register,
  //   navigationOptions: ({ navigation }) => ({
  //     title: `Cadastro`,
  //     headerStyle: {
  //       backgroundColor: '#115E54',
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   }),
  // },
  // Welcome,
  Main,
  AddContact
});