import firebase from 'firebase';
import { loginError } from '../../utils/firebaseErrorHandling';

export const userLogin = navigation => {
  return (dispatch, getState) => {
    const { email, password } = getState().login;

    if(!email || !password)
      return false;

    dispatch(loginRequest());

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(loginUserSuccess());
        navigation.navigate('Main');
      })
      .catch(error => {
        let erro = loginError(error.code);
        dispatch(loginUserError(erro));
      });
  };
}

export const getEmail = payload => ({
  type: 'GET_EMAIL',
  payload 
});

export const getPassword = payload => ({
  type: 'GET_PASSWORD',
  payload 
});

export const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
});

const loginUserSuccess = payload => ({
  type: 'LOGIN_SUCCESS',
  payload 
});

const loginUserError = payload => ({
  type: 'LOGIN_FAILED',
  payload 
});