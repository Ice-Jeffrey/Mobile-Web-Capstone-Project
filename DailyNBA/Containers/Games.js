import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import GameSheet from '../Codes/Games/GameSheet';
import GameDetails from '../Codes/Games/GameDetails'

class Yesterday extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <GameSheet date='20181225' navigation={this.props.navigation}/>
  }
}

class Today extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <GameSheet date='20181226' navigation={this.props.navigation}/>
  }
}

const TopTabNavigator = createMaterialTopTabNavigator({//在这里配置页面的路由
    Yesterday: {
        screen: Yesterday,
        navigationOptions: {
          tabBarLabel: 'Yesterday',
        }
    },
    Today: {
      screen: Today,
      navigationOptions: {
        tabBarLabel: 'Today',
      }
    },
  },
  {
    tabBarOptions: {
      tabStyle: {
        width: Dimensions.get('screen').width/2
      },
      scrollEnabled: true,//是否支持 选项卡滚动，默认false
      activeTintColor: 'red',//label和icon的前景色 活跃状态下（选中）
      inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
      style: {
          backgroundColor: '#F5FCFF',
          height: Dimensions.get('screen').height/20,
          alignItems: 'center',
          justifyContent: 'center'
      },
      indicatorStyle: {
          height: 2,
          backgroundColor: 'white',
      },//标签指示器的样式
      labelStyle: {
          fontSize: 13,
          marginTop: 6,
          marginBottom: 6,
      },//文字的样式
    },
  }
)

const HomeStack = createStackNavigator({
  Home: {
    screen: TopTabNavigator,
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle:{
          alignSelf:'center',
      },
      headerLeft: (
        <Avatar
          rounded
          title='ME'
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
  Details: GameDetails,
});
 
export default createAppContainer(HomeStack)