import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Tutorial from './components/Tutorial';
import Dashboard from './components/Dashboard';

export default createStackNavigator(
  {
    Home: {
      screen: Tutorial
    },
    Dashboard
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);
