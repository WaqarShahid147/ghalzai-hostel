import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import SplashScreen from '../Containers/SplashScreen';
import DashboardScreen from '../Containers/DashboardScreen';
import RoomsScreen from '../Containers/RoomsScreen';
import CustomDrawerContainer from '../Containers/CustomeDrawerContainer';
import styles from './NavigationStyles';

const AppStackNavigator = createStackNavigator({
  Dashboard: { screen: DashboardScreen },
  Rooms: { screen: RoomsScreen },
}, {
  headerMode: 'float',
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: styles.header,
    headerLeft:
  <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <Icon name="menu" size={30} iconStyle={{ paddingLeft: 10 }} />
  </TouchableOpacity>,
  }),
  gesturesEnabled: false,
});

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: { screen: AppStackNavigator },
}, {
  contentComponent: CustomDrawerContainer,
  drawerWidth: 250,
});

const AppSwitchNavigator = createSwitchNavigator({
  Splash: { screen: SplashScreen },
  Dashboard: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
