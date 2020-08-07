import React, {Component} from "react";
import {View, Dimensions, StyleSheet, TextInput, TouchableOpacity} from "react-native";
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
            this.setState({data: ''});
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
                <View>
                    <TextInput
                        onChangeText={(text)=>{this.change(text)}}
                        onSubmitEditing={() => this._onPress}
                        placeholder="Which team you want to know?"
                        blurOnSubmit={false}
                        returnKeyType="done"
                        style={styles.input}
                    />
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={this._onPress}>
                        <Icon name='search' type='material' color='black'/>
                    </TouchableOpacity>
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