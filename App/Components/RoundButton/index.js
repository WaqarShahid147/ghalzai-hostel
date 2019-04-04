import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class RoundButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
