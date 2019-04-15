import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';

export const getcontactsList = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    let emailUserB64 = base64.encode( currentUser.email );

    // verifica os contatos do usuario atual em tempo real
    firebase.database().ref(`/usuario-contatos/${emailUserB64}`)
      .on('value', snapshot => {

        const dadosContatosObj = _.map(snapshot.val(), (val, uid) => {
          return {...val, uid}
        });

        dispatch(contactsList(dadosContatosObj));
      })
  };
}

const contactsList = payload => ({
  type: 'CONTACT_LIST',
  payload
});

export const getNameAndEmailClicked = payload => ({
  type: 'GET_NAME_EMAIL_CLICKED',
  payload
});