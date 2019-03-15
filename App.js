import React, { Component } from 'react';
import Routes from './src/Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers'
import firebase from 'firebase';

class App extends Component {

  //WillMount é criado antes do render, DidMount é criado após o render
  componentWillMount() {

    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyBZS0GbPPooh5YC3ViGNSePbf1Xvq7o3RQ",
      authDomain: "whatsappclone-91a2d.firebaseapp.com",
      databaseURL: "https://whatsappclone-91a2d.firebaseio.com",
      projectId: "whatsappclone-91a2d",
      storageBucket: "whatsappclone-91a2d.appspot.com",
      messagingSenderId: "646202122449"
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

export default App;