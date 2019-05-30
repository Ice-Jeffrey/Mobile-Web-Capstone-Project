import React, {Component} from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {Icon} from 'react-native-elements'

export class SearchSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchResult', {date: this.state.date})}>
                    <Icon name='search' type='material' color="#CCC"/>
                </TouchableOpacity>
                <TextInput
                    maxLength={ 8 }
                    onChangeText = {(text) => this.setState({ date: text })}
                    onSubmitEditing = {() => this.props.navigation.navigate('SearchResult', {date: this.state.date})}
                    placeholder = "please input a date like 20190101"
                    blurOnSubmit = {false}
                    returnKeyType = "search"
                    style = {styles.input}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    input: {
        flex: 1,
        marginLeft: 16,
        height: 50
    }
})