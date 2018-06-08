import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import DashboardTabBar from './DashboardTabBar';

class Dashboard extends Component {
  render() {
    return (
      <ScrollableTabView
        initialPage={1}
        renderTabBar={() => (
          <DashboardTabBar activeTextColor="red" inactiveTextColor="black" />
        )}>
        <View tabLabel="ios-person">
          <Text>FIRSTIT</Text>
        </View>
        <View tabLabel="ios-bug">
          <Text>SECONDA</Text>
        </View>
        <View tabLabel="ios-chatbubbles">
          <Text>HELLO</Text>
        </View>
      </ScrollableTabView>
    );
  }
}

// {
/* <Settings />
        <Feed />
        <Chat /> */
// }

export default Dashboard;
