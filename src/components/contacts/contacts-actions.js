import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';

export const getListContacts = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    let emailUserB64 = base64.encode( currentUser.email );

    // verifica os contatos do usuario atual em tempo real
    firebase.database().ref(`/usuario-contatos/${emailUserB64}`)
      .on('value', snapshot => {

        const dadosContatosObj = _.map(snapshot.val(), (val, uid) => {
          return {...val, uid}
        });

        dispatch(listContacts(dadosContatosObj));
      })
  };
}

const listContacts = payload => ({
  type: 'LIST_CONTACT',
  payload
});