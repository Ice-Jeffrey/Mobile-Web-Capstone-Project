import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, } from 'react-navigation';
import { Icon } from 'react-native-elements'
import { useScreens } from 'react-native-screens';
useScreens();
import AppContainer from './Containers/Games'

class MeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Me</Text>
      </View>
    );
  }
}

class RankingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Rankings</Text>
      </View>
    );
  }
}



const TabNavigator = createBottomTabNavigator(
  {
    Games: AppContainer,
    Rankings: RankingsScreen,
    Me: MeScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === 'Games') {
          iconName = `ios-basketball`;
          iconType = `ionicon`
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          //IconComponent = <ion-icon name="basketball"></ion-icon>; 
        } else if (routeName === 'Rankings') {
          iconName = `bars`;
          iconType = `antdesign`
        } else if (routeName === 'Me') {
          iconName = 'person',
          iconType = 'material'
        }

        // You can return any component that you like here!
        return <Icon 
          name={iconName}
          type={iconType}
          size={25} 
          color={tintColor} 
        />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

export default createAppContainer(TabNavigator);