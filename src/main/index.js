import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './routes';
import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase in project
    let config = {
      apiKey: "AIzaSyDN6ue9woAZrD3n6wGHRppL_zOSdV2o4J4",
      authDomain: "whatsapp-clone-5b1ab.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-5b1ab.firebaseio.com",
      projectId: "whatsapp-clone-5b1ab",
      storageBucket: "whatsapp-clone-5b1ab.appspot.com",
      messagingSenderId: "364356663214"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  };
};

export default App;