import React,{Component} from 'react';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import information from '../rankings/information';
import datas from '../rankings/datas';
import lineup from '../rankings/lineup'

const topNavigator = createMaterialTopTabNavigator({
    information:{
        screen: information,
        navigationOptions:{
            title:'Information',
        }
    },
    datas:{
        screen:datas,
        navigationOptions:{
            title:'Datas',
        }
    },
    lineup:{
        screen:lineup,
        navigationOptions:{
            title:'Lineup',
        }
    }
},{
    swipeEnabled:true,
    animationEnabled:true,
    tabBarOptions:{
        upperCaseLabel:false, 
    }
})


const Ap = createAppContainer(topNavigator);
export default Team = ({props}) => {
    return <Ap screenProps={{name: props.name}}/>
} 