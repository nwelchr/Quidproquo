import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  PixelRatio,
  TouchableWithoutFeedback,
  Easing,
  Image,
  Platform
} from 'react-native';
import { Button } from './common';
import Icon from 'react-native-vector-icons/Ionicons';

class DashboardTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: 35,
      1: 40,
      2: 35
    };
  }

  renderTabOption(name, page) {}

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, textStyle } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    const opacity = isTabActive ? 1 : 0.7;
    const circle = isTabActive ? (
      <View style={{ width: 40, height: 40, borderRadius: 20 }} />
    ) : null;

    const imageStyle = {
      width: 35,
      height: 35,
      opacity
    };

    let icon;
    if (name === 'quidproquo') {
      icon = (
        <Image
          style={imageStyle}
          source={{
            uri:
              'https://s3.us-east-2.amazonaws.com/quidproquo/qpq_assets/logo-xsmall.png'
          }}
        />
      );
    } else {
      icon = (
        <Text style={[{ opacity }, textStyle]}>
          <Icon name={name} size={this.state[page]} />
        </Text>
      );
    }

    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => {
          onPressHandler(page);
        }}>
        <View style={[styles.tab, this.props.tabStyle]}>{icon}</View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const containerWidth = Dimensions.get('window').width;
    const numberOfTabs = 3;

    return (
      <View
        style={[
          styles.tabs,
          { backgroundColor: this.props.backgroundColor },
          this.props.style
        ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.renderTab.bind(this);
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 6
  },
  textStyle: {
    fontSize: 30
  }
});

export default DashboardTabBar;
