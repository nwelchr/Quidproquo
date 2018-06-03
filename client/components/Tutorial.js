import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Card, CardSection, Input, Button, Spinner } from './common';

const ENTRIES = [
  {
    instruction: 'You scratch their back, they scratch yours.',
    image: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
    instruction: "Swipe right if you're interested in exchanging.",
    image: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
    instruction: 'Make a match if you both swipe right!',
    image: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
    instruction: 'Chat and figure out a win-win deal.',
    image: 'https://i.imgur.com/KZsmUi2l.jpg'
  }
];

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

function wp(percentage) {
  const value = percentage * viewportWidth / 100;
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
      <View>
        <Card>
          <CardSection>
            <View style={{ width: '70%' }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'HelveticaNeue-UltraLight',
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
              style={{ flex: 1, height: 300, width: 'auto' }}
              source={{ uri: item.image }}
            />
          </CardSection>
        </Card>
      </View>
    );
  }

  logIntoFacebook() {
    console.log('hi');
  }

  render() {
    const { activeSlide } = this.state;

    return (
      <View style={{ backgroundColor: 'white', width: '100%', flex: 1 }}>
        <View style={{ flex: 1.5 }}>
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
                <Button onPress={this.logIntoFacebook.bind(this)}>
                  Log In With Facebook
                </Button>
              </CardSection>
              <CardSection>
                <Button onPress={this.logIntoFacebook.bind(this)}>
                  Log In With Google
                </Button>
              </CardSection>
            </Card>
            <CardSection>
              {/* <Image source={{}} /> */}
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

export default Tutorial;
