import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

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
                    visitor: data.sports_content.game.visitor.Leaders,
                    home: data.sports_content.game.home.Leaders
                })
                //console.log(this.state.visitor),
                //console.log(this.state.home)  
            ))
            .catch(error => alert(error))
    }

    render() {
        return(
            <View>
                <Text style={{fontSize: 25}}>{'\n'}Leaders</Text>
                <View style={styles.container}>
                    
                    <View style={styles.row}>
                        <View style={styles.titleCell}><Text style={{fontSize: 20}}>AWAY</Text></View>
                        <View style={styles.titleCell} />
                        <View style={styles.titleCell}><Text style={{fontSize: 20}}>HOME</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.nameCell}><Text>{this.state.visitor.Points && this.state.visitor.Points.leader[0].LastName}</Text></View>
                        <View style={styles.statsCell}><Text>{this.state.visitor.Points && this.state.visitor.Points.StatValue}</Text></View>
                        <View style={styles.titleCell}><Text style={{fontSize: 20}}>Points</Text></View>
                        <View style={styles.statsCell}><Text>{this.state.home.Points && this.state.home.Points.StatValue}</Text></View>
                        <View style={styles.nameCell}><Text>{this.state.home.Points && this.state.home.Points.leader[0].LastName}</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.nameCell}><Text>{this.state.visitor.Assists && this.state.visitor.Assists.leader[0].LastName}</Text></View>
                        <View style={styles.statsCell}><Text>{this.state.visitor.Assists && this.state.visitor.Assists.StatValue}</Text></View>
                        <View style={styles.titleCell}><Text style={{fontSize: 20}}>Assists</Text></View>
                        <View style={styles.statsCell}><Text>{this.state.home.Assists && this.state.home.Assists.StatValue}</Text></View>
                        <View style={styles.nameCell}><Text>{this.state.home.Assists && this.state.home.Assists.leader[0].LastName}</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.nameCell}><Text>{this.state.visitor.Rebounds && this.state.visitor.Rebounds.leader[0].LastName}</Text></View>
                        <View style={styles.statsCell}><Text>{this.state.visitor.Rebounds && this.state.visitor.Rebounds.StatValue}</Text></View>
                        <View style={styles.titleCell}><Text style={{fontSize: 20}}>Rebounds</Text></View>
                        <View style={styles.statsCell}><Text>{this.state.home.Rebounds && this.state.home.Rebounds.StatValue}</Text></View>
                        <View style={styles.nameCell}><Text>{this.state.home.Rebounds && this.state.home.Rebounds.leader[0].LastName}</Text></View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    titleCell: {
        width: Width/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statsCell: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30
    },
    nameCell: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Width/3 - 30
    }
})