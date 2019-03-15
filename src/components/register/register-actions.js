import firebase from 'firebase';
import registerError from '../../utils/registerError';

export const registerUser = navigation => {
  return (dispatch, getState) => {
    const { email, password } = getState().login;
    const { name } = getState().register;

    dispatch(registerUserAction());

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Welcome');
        dispatch(registerUserSuccess());
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