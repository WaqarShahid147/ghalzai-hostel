import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 4,
    fontWeight: '500',
  },
  inputText: {
    height: 45,
    fontSize: 18,
    color: Colors.balck,
    borderColor: Colors.snow,
    backgroundColor: Colors.frost,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 5,
  },
  inputTextLarge: {
    height: 200,
    fontSize: 18,
    color: Colors.background,
    borderColor: Colors.snow,
    backgroundColor: Colors.frost,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 5,
  },
});
