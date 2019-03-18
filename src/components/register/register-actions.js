import firebase from 'firebase';
import base64 from 'base-64';
import { registerError } from '../../utils/firebaseErrorHandling';

export const registerUser = navigation => {
  return (dispatch, getState) => {
    const { email } = getState().login;
    const { name, password } = getState().register;

    dispatch(registerUserAction());

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        let emailBase64 = base64.encode(email);
        
        firebase.database().ref(`contatos/${emailBase64}`)
          .push({ name })
          .then(() => {
            dispatch(registerUserSuccess());
            navigation.navigate('Welcome');
          });
      })
      .catch(error => {
        let erro = registerError(error.code);
        dispatch(registerUserError(erro));
      });
  };
};

export const getName = payload => ({
  type: 'GET_NAME',
  payload 
});

export const getPassword = payload => ({
  type: 'REGISTER_GET_PASSWORD',
  payload 
});

const registerUserAction = () => ({
  type: 'REGISTER_USER_REQUEST',
});

const registerUserSuccess = () => ({
  type: 'REGISTER_USER_SUCCESS',
});

const registerUserError = payload => ({
  type: 'REGISTER_USER_FAILED',
  payload 
});