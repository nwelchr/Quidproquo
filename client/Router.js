import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Tutorial from './components/Tutorial';
import Test from './components/Test';

export default createStackNavigator(
  {
    Home: {
      screen: Tutorial
    },
    Test
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);
