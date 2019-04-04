import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object,
  }

  render() {
    const { externalStyles, onPress, text } = this.props;
    return (
      <TouchableOpacity style={[styles.button, externalStyles]} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
