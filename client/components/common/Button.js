import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5
  },
  textStyle: {
    alignSelf: 'center',
    fontFamily: 'HelveticaNeue-UltraLight',
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
