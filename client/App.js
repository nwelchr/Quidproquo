import React, { Component } from 'react';
import { Image, Linking, StyleSheet, Platform, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import LoginSwitch from './components/LoginSwitch';
import { INITIAL_STORE } from '../frontendData';

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginSwitch />
      </Provider>
    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    margin: 20
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30
  }
});
