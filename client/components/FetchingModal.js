import React from 'react';
import { Text, View } from 'react-native';
import { Spinner, Card } from './common';

export default () => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: 'white',
      zIndex: 10,
      elevation: 10,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }}>
    <Card style={{ height: '20%' }}>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'HelveticaNeue-Light',
          fontSize: 25
        }}>
        Fetching Users...
      </Text>
      <Spinner size="large" />
    </Card>
  </View>
);
