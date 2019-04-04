import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

export default class CustomTextInput extends Component {
  render() {
    const {
      value, editable, label, isLarge, placeholder, changeText,
      secure, externalStyles, keyboardType,
    } = this.props;
    return (
      <View style={styles.inputContainer}>
        {
          { label }
          && <Text style={[styles.inputLabel, externalStyles]}>{ label }</Text>
        }
        <TextInput
          underlineColorAndroid="transparent"
          style={isLarge ? styles.inputTextLarge : styles.inputText}
          placeholder={placeholder && placeholder}
          value={value && value}
          autoCorrect={false}
          autoCapitalize="none"
          editable={editable}
          secureTextEntry={secure ? true : false}
          multiline={isLarge ? true : false}
          textAlignVertical="top"
          keyboardType={keyboardType}
          onChange={(e) => { changeText(e.nativeEvent.text); }}
        />
      </View>
    );
  }
}
