import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class RoomsScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Text>
          Rooms Screen
        </Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
