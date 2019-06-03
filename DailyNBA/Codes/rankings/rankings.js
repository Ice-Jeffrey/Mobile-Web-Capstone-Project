import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Eastern_Rankings from '../rankings/Eastern'
import Western_Rankings from '../rankings/Western'

const TabNavigator = createMaterialTopTabNavigator({
    East: {
        screen:Eastern_Rankings,
        navigationOptions:{
            title:'Eastern Ranking',
        }
    },
    West: {
        screen:Western_Rankings,
        navigationOptions:{
            title:'Western Ranking',
        }
    },
},{
    swipeEnabled:true,
    animationEnabled:true,
    tabBarOptions:{
        upperCaseLabel:false,
        style: {
            backgroundColor: '#F5FCFF',
        },
        activeTintColor: 'red',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        indicatorStyle: {
            height: 2,
            backgroundColor: 'red',
        },//标签指示器的样式
        labelStyle: {
            fontSize: 13,
            marginTop: 6,
            marginBottom: 6,
        },//文字的样式
    }
})

export default createAppContainer(TabNavigator);