import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import GameSheet from '../Codes/Games/GameSheet';
import GameDetails from '../Codes/Games/GameDetails'
import { Avatar } from 'react-native-elements';
import { SearchSheet } from '../Codes/Games/search'
import {DatePicker} from '../Codes/Games/datepicker'

const Width = Dimensions.get('screen').width;

//get current date
var date = new Date() - 1000 * 3600 * 24;
var nowMonth = date.getMonth() + 1;
var strDate = date.getDate();
if (nowMonth >= 1 && nowMonth <= 9) {
   nowMonth = "0" + nowMonth;
}
if (strDate >= 0 && strDate <= 9) {
   strDate = "0" + strDate;
}
const nowDate = date.getFullYear() + nowMonth + strDate;

class Yesterday extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <GameSheet date={nowDate-1} navigation={this.props.navigation}/>
  }
}

class Today extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <GameSheet date={nowDate} navigation={this.props.navigation}/>
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
    initialRouteName: 'Today',
    defaultNavigationOptions: {
      header: null
    },
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

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    }
  }

  render() {
    return <GameSheet date={this.props.navigation.getParam('date', null)} navigation={this.props.navigation} />
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: TopTabNavigator,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#0099FF'
      },
      headerTitle: (
        <View style={{flexDirection: 'row', width: Width}}>
          {<View style={{alignContent: 'center', justifyContent: 'center', left: 5}}>
            <Avatar
              rounded
              title='ME'
              onPress={() => navigation.navigate('DrawerOpen')}
            />
          </View>}
          <View style={{alignContent: 'center', justifyContent: 'center', left: 15}}>
            <DatePicker navigation={navigation} />
          </View>
          <View>
            <SearchSheet navigation={navigation}/>
          </View>
          
        </View>
      ),
    }),
  },
  SearchResult: {
    screen: SearchResult,
    navigationOptions: ({ navigation }) => {
      let title = navigation.getParam('date', null);
      return {headerTitle: title}
    },
  },
  Details: GameDetails,
});

export default createAppContainer(HomeStack)