import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';

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

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSlide: 0, doneFetching: false };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ doneFetching: true }), 2000);
  }

  renderItem({ item, index }) {
    const { name, blurb, offering, seeking, pictureUrl } = item;
    return (
      <View style={{ paddingTop: 40 }}>
        <Card>
          <CardSection>
            <View
              style={{
                height: 200,
                width: 200,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
                overflow: 'hidden'
              }}>
              <Image
                style={{
                  flex: 1
                }}
                source={{ uri: pictureUrl }}
              />
            </View>
          </CardSection>
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
                {name}
                {blurb}
                {offering}
                {seeking}
              </Text>
            </View>
          </CardSection>
        </Card>
      </View>
    );
  }

  render() {
    console.log(this.props.users);
    if (!this.state.doneFetching) {
      return (
        <Fragment>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
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
        </Fragment>
      );
    }
    const { activeSlide } = this.state;
    const data = Object.values(this.props.users);

    return (
      <View style={{ backgroundColor: 'white', width: '100%', flex: 1 }}>
        <View style={{ flex: 1.5 }}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={data}
            renderItem={this.renderItem.bind(this)}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={index => this.setState({ activeSlide: index })}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Feed);
