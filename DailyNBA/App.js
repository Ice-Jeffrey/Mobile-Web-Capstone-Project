import React, {Component} from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements'
import { useScreens } from 'react-native-screens';
useScreens();
import GamesContainer from './Containers/Games'
import RankingsContainer from './Containers/Rankings'
import WebContainer from './Containers/Web'

class MeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Me</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Games: {
      screen: GamesContainer,
      activeColor: 'red',
      inactiveColor: 'gray',
      navigationOptions: {
        tabBarLabel: 'Games',
        tabBarColor: '#F5FCFF',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-basketball' type='ionicon' size={25} color={tintColor}  />
        ),
      }
    },  
    Rankings: {
      screen: RankingsContainer,
      activeColor: 'red',
      inactiveColor: 'gray',
      navigationOptions: {
        tabBarLabel: 'Rankings',
        tabBarColor: '#F5FCFF',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='bars' type='antdesign' size={25} color={tintColor}  />
        ),
      }
    },  
    Web: {
      screen: WebContainer,
      activeColor: 'red',
      inactiveColor: 'gray',
      navigationOptions: {
        tabBarLabel: 'News',
        tabBarColor: '#F5FCFF',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='book' type='ionicon' size={25} color={tintColor}  />
        ),
      }
    },
    Me: {
      screen: MeScreen,
      activeColor: 'red',
      inactiveColor: 'gray',
      navigationOptions: {
        tabBarLabel: 'Players',
        tabBarColor: '#F5FCFF',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='person' type='material' size={25} color={tintColor}  />
        ),
      }
    },  
  },  
  {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
    shifting: true,
    barStyle: {height: Dimensions.get('screen').height/12}
  }
);

export default createAppContainer(TabNavigator);