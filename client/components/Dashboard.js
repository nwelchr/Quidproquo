import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import DashboardTabBar from './DashboardTabBar';
import Settings from './Settings';

class Dashboard extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollableTabView
          initialPage={1}
          renderTabBar={() => (
            <DashboardTabBar activeTextColor="red" inactiveTextColor="black" />
          )}>
          <Settings tabLabel="ios-person" />
          <View tabLabel="quidproquo">
            <Text>SECONDA</Text>
          </View>
          <View tabLabel="ios-chatbubbles">
            <Text>HELLO</Text>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

// {
/* <Settings />
        <Feed />
        <Chat /> */
// }

export default Dashboard;
