import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Text>
          Splash Screen
        </Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}
