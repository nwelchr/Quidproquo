import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Card, CardSection, Input, Button, Spinner } from './common';
import LinearGradient from 'react-native-linear-gradient';

import { ENTRIES } from '../../frontendData';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(90);
const itemHorizontalMargin = wp(0);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSlide: 0 };
  }

  renderItem({ item, index }) {
    console.log(item.image);
    return (
      <View style={{ paddingTop: 40 }}>
        <Card>
          <CardSection>
            <View style={{ width: '70%' }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'HelveticaNeue',
                  fontWeight: '100',
                  letterSpacing: 0.5,
                  fontSize: 20,
                  color: '#222'
                }}>
                {item.instruction}
              </Text>
            </View>
          </CardSection>
          <CardSection>
            <Image
              style={{
                flex: 1,
                width: 200,
                height: 300,
                alignSelf: 'stretch'
              }}
              source={{ uri: item.image }}
              resizeMode="contain"
            />
          </CardSection>
        </Card>
      </View>
    );
  }

  render() {
    const { activeSlide } = this.state;

    return (
      <View style={{ backgroundColor: 'white', width: '100%', flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={ENTRIES}
            renderItem={this.renderItem.bind(this)}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={index => this.setState({ activeSlide: index })}
          />
          <Pagination
            activeDotIndex={activeSlide}
            dotsLength={ENTRIES.length}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Card style={{ justifyContent: 'space-between', flex: 1 }}>
            <Card>
              <CardSection>
                <TouchableOpacity
                  onPress={this.props.onGooglePress}
                  style={{ flex: 1 }}>
                  <LinearGradient
                    colors={['#f5605f', '#db4645']}
                    start={{ x: 0.5, y: 0.0 }}
                    end={{ x: 0.5, y: 1.0 }}
                    style={styles.linearGradient}>
                    <Text style={styles.linearGradientButtonText}>
                      Sign in with Google
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </CardSection>
              <CardSection>
                <TouchableOpacity
                  onPress={this.props.onFacebookPress}
                  style={{ flex: 1 }}>
                  <LinearGradient
                    colors={['#405d9c', '#27437e']}
                    start={{ x: 0.5, y: 0.0 }}
                    end={{ x: 0.5, y: 1.0 }}
                    style={styles.linearGradient}>
                    <Text style={styles.linearGradientButtonText}>
                      Sign in with Facebook
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </CardSection>
            </Card>
            <CardSection>
              <Text
                style={{
                  fontFamily: 'HelveticaNeue-UltraLight'
                }}>
                Quidproquo. @2018. All Rights Reserved.
              </Text>
            </CardSection>
          </Card>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20
  },
  linearGradientButtonText: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-UltraLight',
    fontWeight: '300',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    margin: 10
  }
});

export default Tutorial;
