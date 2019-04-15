import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';

export const getContactList = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    const userEmailB64 = base64.encode(currentUser.email);

    // firebase.database().ref(`/mensagens/${userEmailB64}`)
    // .on('value', snapshot => {
    //   const contactList = _.map(snapshot.val(), (val, uid) => {
    //     let messageObj = _.last(_.values(val));

    //     console.log(val)
        
    //     return { email: base64.decode(uid), message: messageObj.message }
    //   });

    //   console.log(contactList);

    //     dispatch(contactsList(contactList));
    //   })
    

    // verifica os contatos do usuario atual em tempo real
    firebase.database().ref(`/usuario-contatos/${userEmailB64}`)
      .on('value', snapshot => {

        const contactList = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid };
        });

        dispatch(contactsList(contactList));
      })
  };
}

const contactsList = payload => ({
  type: 'CONTACTS_LIST',
  payload
});

export const getNameAndEmailClicked = payload => ({
  type: 'GET_NAME_EMAIL_CLICKED',
  payload
});