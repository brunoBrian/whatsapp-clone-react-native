import firebase from 'firebase';

export default Logout = navigation => {
  firebase.auth().signOut()
    .then(() => {
      navigation.navigate('Login');
    });
}