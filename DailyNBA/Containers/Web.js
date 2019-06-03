import React, {Component} from 'react-native'
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Webdetail from '../Codes/web/webdetail'
import Webview from '../Codes/web/webview'

const stacknavigation = createStackNavigator({
    Home:{
        screen:Webview,
        navigationOptions:{
            headerTitle: 'Sports News'
        }
    },
    Detail:{
        screen:Webdetail,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(stacknavigation)