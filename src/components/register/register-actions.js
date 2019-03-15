import firebase from 'firebase';
import registerError from '../utils/registerError';

export const registerUser = () => {
  return (dispatch, getState) => {
    const { email, password } = getState().login;
    const { name } = getState().register;

    if( email && password )
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          dispatch(registerUserSuccess('Usuário criado com sucesso!'))
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

const registerUserAction = (name, email, password) => ({
  type: 'REGISTER_USER_REQUEST',
  payload: name 
});

const registerUserSuccess = payload => ({
  type: 'REGISTER_USER_SUCCESS',
  payload 
});

const registerUserError = payload => ({
  type: 'REGISTER_USER_FAILED',
  payload 
});