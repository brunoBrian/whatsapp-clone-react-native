import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';

export const addContact = navigation => {
  return (dispatch, getState) => {
    const { email } = getState().addContact;

    const emailB64 = base64.encode(email);

    // Verifica no banco de contatos se o e-mail está cadastrado na base do whatsappClone
    // Recebe valores no parametro snapshot se o e-mail digitado estiver na base
    firebase.database().ref(`/contatos/${emailB64}`)
      .once('value')
      .then(snapshot => {
        if(snapshot.val()) {
          // Pega os dados do usuario logado
          const { currentUser } = firebase.auth();
          let userMailB64 = base64.encode(currentUser.email);

          // Transforma o objeto que vem do snapshot em array, e com o _first, remove o indice 0 e traz só o valor
          const dadosUsuario = _.first(_.values(snapshot.val()));

          // Adiciona no banco /usuario-contatos/hash-do-email o email e o nome do contato que o usuario colocou o e-mail
          firebase.database().ref(`/usuario-contatos/${userMailB64}`)
            .push({ email, name: dadosUsuario.name })
            .then(() => dispatch(addContactSuccess()))
            .catch(error => dispatch(addContactFailed(error.message)));
        }else {
          dispatch(addContactFailed('E-mail informado não corresponde a um usuário válido!'))
        }
      });

    dispatch(addContactRequest());
  }
}

export const addContactHideSuccessMessage = navigation => {
  return (dispatch) => {
    dispatch(addContactHideSuccessMessageAction());
    navigation.navigate('AddContact');
  }
};

export const getEmail = payload => ({
  type: 'ADD_CONTACT_GET_EMAIL',
  payload
});

const addContactHideSuccessMessageAction = () => ({
  type: 'ADD_CONTACT_HIDE_SUCCESS_MESSAGE',
});

const addContactRequest = () => ({
  type: 'ADD_CONTACT_REQUEST',
});

const addContactSuccess = () => ({
  type: 'ADD_CONTACT_SUCCESS',
});

const addContactFailed = payload => ({
  type: 'ADD_CONTACT_FAILED',
  payload
});