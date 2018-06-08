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
        <View tabLabel="First">
          <Text>FIRSTIT</Text>
        </View>
        <View tabLabel="Second">
          <Text>SECONDA</Text>
        </View>
        <View tabLabel="Third">
          <Text>THIRDO</Text>
        </View>
      </ScrollableTabView>
    );
  }
}

export default Dashboard;
