import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from './common';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Card>
          <Image
            style={styles.picStyle}
            source={{
              uri: 'https://i.imgur.com/UYiroysl.jpg'
            }}
          />
          <Text style={styles.nameStyle}>Nick, 24</Text>
        </Card>
        <Card
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
          <Card
            style={{
              alignItems: 'center'
            }}>
            <View style={styles.buttonContainerStyle}>
              <Icon name="cog" size={40} />
            </View>
            <Text style={styles.textStyle}>Settings</Text>
          </Card>
          <Card
            style={{
              alignItems: 'center'
            }}>
            <View style={styles.buttonContainerStyle}>
              <Icon name="pencil" size={40} />
            </View>
            <Text style={styles.textStyle}>Edit Profile</Text>
          </Card>
        </Card>
        <Card style={{ flex: 1, alignItems: 'flex-end' }}>
          <Ionicon name="ios-information-circle" size={50} />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    elevation: 0,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  picStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10
  },
  nameStyle: {
    textAlign: 'center',
    fontSize: 20
  },
  buttonContainerStyle: {
    backgroundColor: '#eee',
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  textStyle: {
    fontFamily: 'HelveticaNeue-Light'
  }
});

export default Settings;
