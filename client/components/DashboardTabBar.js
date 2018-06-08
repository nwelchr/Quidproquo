import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  PixelRatio,
  TouchableWithoutFeedback
} from 'react-native';
import { Button } from './common';
import Icon from 'react-native-vector-icons/Ionicons';

class DashboardTabBar extends Component {
  constructor(props) {
    super(props);
  }

  renderTabOption(name, page) {}

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, textStyle } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}>
        <View style={[styles.tab, this.props.tabStyle]}>
          <Text style={[{ color: textColor, fontWeight }, textStyle]}>
            <Icon name={name} size={35} />
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const containerWidth = Dimensions.get('window').width;
    const numberOfTabs = 3;
    // const tabUnderlineStyle = {
    //   position: 'absolute',
    //   width: containerWidth,
    //   height: 1,
    //   backgroundColor: '#fff',
    //   shadowColor: '#000',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowOpacity: 1,
    //   bottom: 0
    // };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs]
    });

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
    paddingTop: 20
  },
  tabs: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  textStyle: {
    fontSize: 30
  }
});

export default DashboardTabBar;
