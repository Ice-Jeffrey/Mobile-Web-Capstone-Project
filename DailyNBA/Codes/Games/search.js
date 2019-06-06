import React, {Component} from "react";
import { StyleSheet, Dimensions, TextInput, TouchableOpacity, View } from "react-native";
import {Icon} from 'react-native-elements'

export class SearchSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    _onSubmitEditing = (strDate) => {
        let flag = true;
        if (strDate.length != 8) 
            flag = false;
        var dtDate = null ;
        var nYear = parseInt( strDate.substring( 0, 4 ), 10 ) ;
        var nMonth = parseInt( strDate.substring( 4, 6 ), 10 ) ;
        var nDay = parseInt( strDate.substring( 6, 8 ), 10 ) ;
        if( isNaN( nYear ) == true || isNaN( nMonth ) == true || isNaN( nDay ) == true )
            flag = false;
        dtDate = new Date( nYear, nMonth - 1, nDay ) ;
        if( nYear != dtDate.getFullYear() || ( nMonth - 1 ) != dtDate.getMonth() || nDay != dtDate.getDate() )
            flag = false;
        if(flag)
            this.props.navigation.navigate('SearchResult', {date: strDate})
        else    
            alert('Wrong date!');
    }

    render() {
        return (
            <View style={styles.header}>
                <TextInput
                    maxLength={ 8 }
                    onChangeText = {(text) => this.setState({date: text})}
                    onSubmitEditing = {() => this._onSubmitEditing(this.state.date) }
                    placeholder = "please input a date like 20190101"
                    blurOnSubmit = {false}
                    returnKeyType = "search"
                    style={styles.input}
                />
                <TouchableOpacity 
                    onPress={() => this._onSubmitEditing(this.state.date)}
                    style={{marginRight: 10}}
                >
                    <Icon name='search' type='material' color='white'/>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems:'center',
        justifyContent: 'center'
    },
    input: {
        marginLeft: 16,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 16,
        backgroundColor: 'white',
        width: Dimensions.get('screen').width * 2/3,
        borderRadius: 20
    }
})