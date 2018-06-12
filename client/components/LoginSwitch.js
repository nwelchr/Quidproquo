import React, { Component } from 'react';
import Tutorial from './Tutorial';
import Dashboard from './Dashboard';
import { Linking, Platform, View } from 'react-native';
import SafariView from 'react-native-safari-view';

class LoginSwitch extends Component {
  state = { user: undefined };

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then(url => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  }

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // Decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    });
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  // Handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');

  // Handle Login with Google button tap
  loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

  // Open URL in a browser
  openURL = url => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };

  render() {
    const { user } = this.state;
    const component = user ? (
      <Dashboard />
    ) : (
      <Tutorial
        onFacebookPress={this.loginWithFacebook}
        onGooglePress={this.loginWithGoogle}
      />
    );
    return <View style={{ flex: 1 }}>{component}</View>;
  }
}

export default LoginSwitch;
