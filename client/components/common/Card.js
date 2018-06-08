import React from 'react';
import { View } from 'react-native';

const Card = props => {
  const { containerStyle } = styles;
  return <View style={[containerStyle, props.style]}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    justifyContent: 'center',
    padding: 10
  }
};

export { Card };
