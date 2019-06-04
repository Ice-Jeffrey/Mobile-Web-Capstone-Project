import React, {Component} from "react";
import {View, Dimensions, StyleSheet, TextInput,Button, TouchableOpacity} from "react-native";
import {Icon} from 'react-native-elements'

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            data:''
        }
        this._onPress = this._onPress.bind(this)
    }

    _onPress = () => {
        if(this.state.data===''){
            alert('Wrong player name')
        }
        else {
            this.props.navigation.navigate('Details', {
                Person_Id: this.state.data
         })
        }            
    }
    
    change = (text) => {
        this.setState({
            data: text
            })
        
    }

    render (){
        return(        
            <View style={styles.header}>
                <View>
                    <TextInput
                        onChangeText={(text)=>{this.change(text)}}
                        onSubmitEditing={() => this._onPress}
                        placeholder="Which player you want to know?"
                        blurOnSubmit={false}
                        returnKeyType="done"
                        style={styles.input}
                    />
                </View>
                <View style={{marginRight: 10}}>
                    <Icon 
                        onPress={this._onPress}
                        name='search'
                        type='material' 
                    />
                </View>
            </View>                     
        )
    }
            

}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: 16,
        width: Dimensions.get('screen').width
    },
    toggleIcon: {
        fontSize: 30,
        color: "#CCC"
    },
    input: {
        height: 40,
        width: Dimensions.get('screen').width * 5/6
    }
})

export default Header;

