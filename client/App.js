import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Header } from './components/common';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
