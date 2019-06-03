import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, TextInput, WebView, TouchableOpacity} from 'react-native';
import Toast from 'react-native-easy-toast'
import {Icon} from 'react-native-elements'

const Width = Dimensions.get('screen').width;

export default class Webdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.navigation.state.params.url,
            title: '',
            canBack: false
        }
    }

    onBack() {
        if (this.state.canBack) {
            this.webView.goBack();
        } else {
            this.props.navigation.goBack();
        }
    }

    onNext() {
        this.setState({
            url: this.text
        })
    }

    onNavigationStateChange(e) {
        this.setState({
            title: e.title,
            canBack: e.canGoBack
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item, {alignItems: 'center', backgroundColor: 'red', width: Width}]}>
                    <TouchableOpacity onPress={()=>{this.onBack()}}><Icon name='chevron-left' type='material'/></TouchableOpacity>
                    <TextInput style={styles.input}
                            placeholder={'Please input the web you want to search'}
                            onChangeText={text=>this.text=text}></TextInput>
                    <TouchableOpacity style={[{marginLeft: 5, marginRight: 10}]} onPress={()=>{this.onNext()}}>
                        <Icon name='search' type='material' color='black'/>
                    </TouchableOpacity>
                </View>
                <WebView source={{uri:this.state.url}}
                        onNavigationStateChange={(e)=>this.onNavigationStateChange(e)}
                        ref={webView=>this.webView=webView}></WebView>
                <Toast ref={toast=>{
                        this.toast=toast
                        }}/>
            </View>
        )
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1
        },
        text: {
            fontSize: 20,
            color: '#333',
            marginLeft: 10
        },
        input: {
            height: 40,
            marginLeft: 10,
            flex: 1,
            borderWidth: 1,
            borderColor:'#dddddd',
            backgroundColor: 'white',
            marginBottom:2,
        },
        item: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
            marginRight: 10
        }
    })
