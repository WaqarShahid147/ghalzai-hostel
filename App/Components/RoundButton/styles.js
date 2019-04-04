import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  button: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    borderRadius: Metrics.icons.xl / 2,
    marginLeft: Metrics.screenWidth / 1.4,
    marginTop: Metrics.screenHeight / 1.7,
    backgroundColor: Colors.fire,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: Metrics.baseMargin,
  },
});
