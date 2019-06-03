import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {Icon} from 'react-native-elements'
import judge from '../../assets/teamdata/judge'
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
            alert('Wrong team name')
        }
        else{
            this.props.navigation.navigate('Details',{name:this.state.data})
        }            
    }
    
    change = (text) =>{
        var name = text.toLowerCase();
        var flag = name in judge;
        if(flag){
            this.setState({
                data:judge[name]
            })
        }
    }

    render (){
        return(        
            <View style={styles.header}>
                <TouchableOpacity onPress={this._onPress}>
                    <Icon name='search' type='material' color='#ccc'/>
                </TouchableOpacity>
                <TextInput
                    onChangeText={(text)=>{this.change(text)}}
                    onSubmitEditing={() => this._onPress}
                    placeholder="Which team you want to know?"
                    blurOnSubmit={false}
                    returnKeyType="done"
                    style={styles.input}
                />
            </View>                     
        )
    }
            

}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16
    },
    toggleIcon: {
        fontSize: 30,
        color: "#CCC"
    },
    input: {
        marginLeft: 16,
        height: 40,
    }
})

export default Header;