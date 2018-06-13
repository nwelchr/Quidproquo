import React, { Component, Fragment } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import FetchingModal from './FetchingModal';
import LinearGradient from 'react-native-linear-gradient';
import ProfilePage from './ProfilePage';
import Util from './utils';

function wp(percentage) {
  const value = (percentage * Util.width) / 100;
  return Math.round(value);
}
const slideHeight = Util.height * 0.36;
const slideWidth = wp(60);
const itemHorizontalMargin = wp(40);

export const sliderWidth = Util.width;
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
    return <ProfilePage {...item} />;
  }

  render() {
    const { activeSlide, doneFetching } = this.state;

    const notDoneFetching = !doneFetching ? <FetchingModal /> : null;

    const data = Object.values(this.props.users);
    console.log(activeSlide);
    return (
      <Fragment>
        {notDoneFetching}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flex: 1
          }}>
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
          <LinearGradient
            colors={['#fff', 'rgba(0, 0, 0, 0)']}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0, y: 0.0 }}
            style={{
              position: 'absolute',
              width: Util.width,
              height: 200,
              bottom: 0
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 0
            }}>
            <TouchableOpacity style={styles.approveButton}>
              <Icon
                style={{ position: 'absolute', top: -8 }}
                name="ios-close-outline"
                size={90}
                color="#ED3B6D"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.approveButton}>
              <Icon
                style={{ position: 'absolute', top: 14 }}
                name="md-heart"
                size={50}
                color="#23AF7C"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  approveButton: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 6,
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  }
});

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Feed);
