import {View,Text} from 'react-native';
import React,{Component} from 'react'
import{createStackNavigator, createAppContainer} from 'react-navigation';
import Rankings from '../../DailyNBA/Codes/Players/Rankings';
import Header from '../Codes/Players/Headers';
import DetailsScreen from "../Codes/Players/DetailsScreen";
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen:Rankings,
      navigationOptions:({navigation}) => ({
        headerTitle: (
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
            <Header navigation={navigation}/>             
          </View>
        ),
        headerStyle: {
          backgroundColor: '#0099FF'
        }
        })
    },
    Details: {
      screen:DetailsScreen,
      navigationOptions:{
        title: 'Player Details',
        style: {
          backgroundColor:"green"
        }
      }
    }
  },
  {
    initialRouteName:'Home',
  }

)

export default createAppContainer(AppNavigator);