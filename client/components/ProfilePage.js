import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { Card, CardSection } from './common';
import Util from './utils';

export default ({ name, blurb, offering, seeking, pictureUrl }) => {
  return (
    <ScrollView
      style={{
        width: Util.width
      }}>
      <Card>
        <CardSection
          style={{
            backgroundColor: 'transparent',
            padding: 0
          }}>
          <View
            style={{
              flex: 1,
              height: 300
            }}>
            <Image
              style={{
                flex: 1
              }}
              source={{ uri: pictureUrl }}
            />
          </View>
        </CardSection>
        <CardSection
          style={{
            padding: 5,
            paddingLeft: 20,
            paddingBottom: 10,
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.textStyle}>{blurb}</Text>
          <Text> </Text>
          <Text style={[styles.textStyle, styles.titleStyle]}>Can offer:</Text>
          {offering.map((offer, idx) => (
            <Text key={idx} style={styles.textStyle}>
              {offer}
            </Text>
          ))}
          <Text> </Text>
          <Text style={[styles.textStyle, styles.titleStyle]}>
            Looking for:
          </Text>
          {seeking.map((seek, idx) => (
            <Text key={idx} style={styles.textStyle}>
              {seek}
            </Text>
          ))}
        </CardSection>
      </Card>
      <View style={{ flex: 1, height: 150 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameStyle: {
    textAlign: 'left',
    fontFamily: 'HelveticaNeue',
    letterSpacing: 0.3,
    fontWeight: '500',
    fontSize: 24,
    color: '#222',
    margin: 2
  },
  textStyle: {
    textAlign: 'left',
    fontFamily: 'HelveticaNeue',
    fontWeight: '200',
    letterSpacing: 0.5,
    fontSize: 16,
    color: '#222',
    margin: 2,
    lineHeight: 20
  },
  titleStyle: {
    fontWeight: '600'
  }
});
