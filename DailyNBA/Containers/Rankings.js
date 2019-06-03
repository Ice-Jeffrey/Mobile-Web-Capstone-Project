import {View,Text} from 'react-native';
import React,{Component} from 'react'
import{createStackNavigator, createAppContainer} from 'react-navigation';
import Rankings from '../Codes/rankings/rankings'
import TeamDeatails from '../Codes/rankings/team_details'
import Header from '../Codes/rankings/header'
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
      screen:TeamDeatails,
      navigationOptions:{
        title:'Team Detail',
      }
    }
  },
  {
    initialRouteName:'Home',
  }

)

export default createAppContainer(AppNavigator);
