import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import APG from './AssistsPerGame';
import FGP from './FiedGoalPercentage';
import RPG from "./ReboundPerGame";
import SPG from './StealsPerGame';
import TPP from './ThreePointPercentage';
import PPG from './PointsPerGame';


const TabNavigator = createMaterialTopTabNavigator({
    PointPerGame: {
      screen:PPG,
      navigationOptions:{
          title: 'PPG',
      }
    },
    AssistsPerGame: {
        screen:APG,
        navigationOptions:{
            title:'APG',
        }
    },
    FiedGoalPercentage: {
        screen:FGP,
        navigationOptions:{
            title:'FGP',
        }
    },
    ReboundPerGame: {
        screen:RPG,
        navigationOptions:{
            title:'RPG',
        }
    },
    StealsPerGame: {
        screen:SPG,
        navigationOptions:{
            title:'SPG',
        }
    },
    ThreePointPercentage: {
        screen:TPP,
        navigationOptions:{
            title:'TPP',
        }
    }
 
},{
    swipeEnabled:true,
    animationEnabled:true,
    tabBarOptions:{
        upperCaseLabel: false,
        indicatorStyle: {
            height: 2,
          backgroundColor:'red'  
        },
        style: {
            backgroundColor:'#f5fcff'
        },
        activeTintColor: 'red',
        inactiveTintColor:'grey'
    }
})

Ap = createAppContainer(TabNavigator);
export default Ap;
