import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Button from '../../Components/FullButton';
import Colors from '../../Themes/Colors';
import styles from './styles';

export default class CustomDrawerContainer extends Component {
  signout() {
    const { navigation } = this.props;
    AsyncStorage.setItem('currentUser', '{}');
    navigation.closeDrawer();
    navigation.navigate('Splash');
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <DrawerItems
            {
            ...this.props
            }
            activeBackgroundColor={Colors.drawer}
            inactiveBackgroundColor={Colors.drawer}
            activeTintColor={Colors.drawer}
            inactiveTintColor={Colors.error}
            style={{ backgroundColor: Colors.snow }}
            labelStyle={{ color: Colors.ricePaper }}
          />
        </SafeAreaView>
        <Button
          text="SIGN OUT"
          onPress={() => this.signout()}
        />
      </View>
    );
  }
}