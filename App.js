/* eslint no-alert: 0, jsx-a11y/accessible-emoji: 0  */

import React, { Component } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";


import { SwitchNav } from "./src/config/Router";


const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCKmEPGOrckPPQBRe9NA3EK0-qnxR1BrkQ",
      authDomain: "company-88b62.firebaseapp.com",
      databaseURL: "https://company-88b62.firebaseio.com",
      projectId: "company-88b62",
      storageBucket: "company-88b62.appspot.com",
      messagingSenderId: "209040713797"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <SwitchNav />
      </Provider>
    );
  }

}
