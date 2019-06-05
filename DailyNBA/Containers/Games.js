import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import GameSheet from '../Codes/Games/GameSheet';
import GameDetails from '../Codes/Games/GameDetails'
import { SearchSheet } from '../Codes/Games/search'
import {DatePicker} from '../Codes/Games/datepicker'

const Width = Dimensions.get('screen').width;

var date = new Date(); //获取当前日期时间戳

var before = date;//当前日期时间戳减去一天时间戳
var beforebefore = date - 1000*60*60*24;

var today = new Date(before);//将时间戳转化为Date对象
var yesterday = new Date(beforebefore);

// get the month
var todayMonth = today.getMonth() + 1;
var yesterdayMonth = yesterday.getMonth() + 1;
// get the date
var todayDate = today.getDate();
var yesterdayDate = yesterday.getDate();
// make adjustments to the month
if (todayMonth >= 1 && todayMonth <= 9) {
  todayMonth = "0" + todayMonth;
}
if (yesterdayMonth >= 1 && yesterdayMonth <= 9) {
  yesterdayMonth = '0' + yesterdayMonth;
}
// made adjustments to the date
if (todayDate >= 0 && todayDate <= 9) {
  todayDate = "0" + todayDate;
}
if (yesterdayDate >= 0 && yesterdayDate <= 9) {
  yesterdayDate = '0' + yesterdayDate;
}
// get the date of yyyy-MM-dd format
var nowDate = today.getFullYear() + todayMonth + todayDate;
var yesDate = yesterday.getFullYear() + yesterdayMonth + yesterdayDate;


class Yesterday extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <GameSheet date={yesDate} navigation={this.props.navigation}/>
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
        width: Dimensions.get('screen').width/2,
        alignItems: 'center',
        justifyContent: 'center'
      },
      upperCaseLabel:false,
      scrollEnabled: true,//是否支持 选项卡滚动，默认false
      activeTintColor: 'red',//label和icon的前景色 活跃状态下（选中）
      inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
      style: {
          backgroundColor: '#F5FCFF',
      },
      indicatorStyle: {
          height: 2,
          backgroundColor: 'red',
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
        backgroundColor: '#0099FF',
        alignItems: 'center'
      },
      headerTitle: (
        <View style={{flexDirection: 'row', width: Width, paddingHorizontal: 16}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
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