import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';

export const sendMessage = () => {
  return (dispatch, getState) => {
    const { message } = getState().conversation;
    
    // Dados do contato
    const { name: contactName, email: contactEmail } = getState().contacts.activeContactClicked;
    
    // Dados do Usuario
    const { currentUser } = firebase.auth();
    const userEmail = currentUser.email;

    // conversão para base64
    const contactEmailB64 = base64.encode(contactEmail);
    const userEmailB64 = base64.encode(userEmail);

    // cria dois endpoints de mensagens no firebase, um para o usuario e outro para o contato, com as mensagens recebidas e enviadas
    firebase.database().ref(`/mensagens/${userEmailB64}/${contactEmailB64}`)
      .push({ message, tipo: 'e' })

      .then(() => {
        firebase.database().ref(`/mensagens/${contactEmailB64}/${userEmailB64}`)
        .push({ message, tipo: 'r' })
      })

      .then(() => { // Armazena o cabeçalho de conversa do usuário autenticado
        firebase.database().ref(`/usuario_conversas/${userEmailB64}/${contactEmailB64}`)
          .set({ name: contactName, email: contactEmail }) // .set sobrescreve os dados enviados, .push adiciona e .update atualiza 
      })

      .then(() => { // Armazena o cabeçalho de conversa do contato
        firebase.database().ref(`/contatos/${userEmailB64}`)
          .once('value')
          .then(snapshot => {
            const userData = _.first(_.values(snapshot.val()));
            firebase.database().ref(`/usuario_conversas/${contactEmailB64}/${userEmailB64}`)
              .set({ name: userData.name, email: userEmail })
          })
        dispatch(cleanMessage());
      })
  };
};

export const getMessage = payload => ({
  type: 'GET_MESSAGE',
  payload 
});

const cleanMessage = () => ({
  type: 'CLEAN_MESSAGE',
});