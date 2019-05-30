import React, {Component} from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
                    <Text style={styles.searchIcon}>{String.fromCharCode(10003)}</Text>
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
    searchIcon: {
        fontSize: 30,
        color: "#CCC"
    },
    input: {
        flex: 1,
        marginLeft: 16,
        height: 50
    }
})