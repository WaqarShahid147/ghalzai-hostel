import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DashboardScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Text>
          Dashboard Screen
        </Text>
        <Button
          title="Go to rooms"
          onPress={() => this.props.navigation.navigate('Rooms')}
        />
      </View>
    );
  }
}
