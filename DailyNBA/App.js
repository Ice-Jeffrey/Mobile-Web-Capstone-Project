import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements'
import { useScreens } from 'react-native-screens';
useScreens();
import GamesContainer from './Containers/Games'

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

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Games: {
      screen: GamesContainer,
      activeColor: 'white',
      inactiveColor: 'gray',
      navigationOptions: {
        tabBarLabel: 'Games',
        tabBarColor: 'red',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-basketball' type='ionicon' size={25} color={tintColor}  />
        ),
      }
    },  
    Rankings: {
      screen: RankingsScreen,
      activeColor: 'white',
      inactiveColor: 'gray',
      navigationOptions: {
        tabBarLabel: 'Rankings',
        tabBarColor: 'orange',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='bars' type='antdesign' size={25} color={tintColor}  />
        ),
      }
    },  
    Me: {
      screen: MeScreen,
      activeColor: 'white',
      inactiveColor: 'gray',
      navigationOptions: {
        tabBarLabel: 'Players',
        tabBarColor: 'blue',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='person' type='material' size={25} color={tintColor}  />
        ),
      }
    },  
  },
  {
    shifting: true,
  }
);

export default createAppContainer(TabNavigator);