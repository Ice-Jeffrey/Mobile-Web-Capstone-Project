import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView} from 'react-native'

//get height and width of the window
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export class Leaders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            date: this.props.date,
            visitor: [

            ],
            home: [

            ]
        }
    }

    componentDidMount() {
        fetch(`http://data.nba.com/data/10s/json/cms/noseason/game/${this.state.date}/${this.state.id}/boxscore.json`)
            .then( response => response.json() )
            .then( data => (
                this.setState({
                    visitor: data.sports_content.game.visitor,
                    home: data.sports_content.game.home
                }),
                console.log(this.state.visitor),
                console.log(this.state.home)  
            ))
            .catch(error => alert(error))
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 25}}>{'\n'}Leaders</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{alignItems: 'center', width: Width/3}}><Text style={{fontSize: 20}}>AWAY</Text></View>
                    <View style={{alignItems: 'center', width: Width/3}} />
                    <View style={{alignItems: 'center', width: Width/3}}><Text style={{fontSize: 20}}>HOME</Text></View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flex: 1, flexDirection: 'row', width: Width/3-30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15}}>{this.state.visitor.Leaders && this.state.visitor.Leaders.Points && this.state.visitor.Leaders.Points.leader[0].LastName}</Text> 
                        </View>   
                        <View style={{width: 30, alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 15}}>{this.state.visitor.Leaders && this.state.visitor.Leaders.Points.StatValue}</Text></View>
                        
                        <View style={{width: Width/3, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 20}}>Points</Text></View>

                        <View style={{width: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15}}>{this.state.visitor.Leaders && this.state.home.Leaders.Points.StatValue}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', width: Width/3-30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15}}>{this.state.home.Leaders && this.state.home.Leaders.Points && this.state.home.Leaders.Points.leader[0].LastName}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flex: 1, flexDirection: 'row', width: Width/3-30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15}}>{this.state.visitor.Leaders && this.state.visitor.Leaders.Assists && this.state.visitor.Leaders.Assists.leader[0].LastName}</Text> 
                        </View>   
                        <View style={{width: 30, alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 15}}>{this.state.visitor.Leaders && this.state.visitor.Leaders.Assists.StatValue}</Text></View>
                        
                        <View style={{width: Width/3, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 20}}>Assists</Text></View>

                        <View style={{width: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15}}>{this.state.visitor.Leaders && this.state.home.Leaders.Assists.StatValue}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', width: Width/3-30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15}}>{this.state.home.Leaders && this.state.home.Leaders.Assists && this.state.home.Leaders.Assists.leader[0].LastName}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flex: 1, flexDirection: 'row', width: Width/3-30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15}}>{this.state.visitor.Leaders && this.state.visitor.Leaders.Rebounds && this.state.visitor.Leaders.Rebounds.leader[0].LastName}</Text> 
                        </View>   
                        <View style={{width: 30, alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 15}}>{this.state.visitor.Leaders && this.state.visitor.Leaders.Rebounds.StatValue}</Text></View>
                        
                        <View style={{width: Width/3, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 20}}>Rebounds</Text></View>

                        <View style={{width: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15}}>{this.state.visitor.Leaders && this.state.home.Leaders.Rebounds.StatValue}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', width: Width/3-30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15}}>{this.state.home.Leaders && this.state.home.Leaders.Rebounds && this.state.home.Leaders.Rebounds.leader[0].LastName}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cell: {
        width: Width/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
})