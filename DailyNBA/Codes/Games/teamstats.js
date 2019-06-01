import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

//get height and width of the window
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export class Teamstats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.id,
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
                    visitor: data.sports_content.game.visitor.stats,
                    home: data.sports_content.game.home.stats
                })
               // console.log(this.state.visitor),
               // console.log(this.state.home)  
            ))
            .catch(error => alert(error))
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 25}}>{'\n'}Team Stats</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{alignItems: 'center', width: Width/3}}><Text style={{fontSize: 20}}>AWAY</Text></View>
                    <View style={{alignItems: 'center', width: Width/3}} />
                    <View style={{alignItems: 'center', width: Width/3}}><Text style={{fontSize: 20}}>HOME</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.points}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Points</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.points}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.field_goals_made}/{this.state.visitor.field_goals_attempted}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Field Goals</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.field_goals_made}/{this.state.home.field_goals_attempted}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.three_pointers_made}/{this.state.visitor.three_pointers_attempted}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Three Pointers</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.three_pointers_made}/{this.state.home.three_pointers_attempted}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.free_throws_made}/{this.state.visitor.free_throws_attempted}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Free Throws</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.free_throws_made}/{this.state.home.free_throws_attempted}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.rebounds_offensive}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Off-Rebounds</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.rebounds_offensive}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.rebounds_defensive}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Def-Rebounds</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.rebounds_defensive}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.assists}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Assists</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.assists}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.steals}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Steals</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.steals}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.blocks}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Blocks</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.blocks}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.visitor.turnovers}</Text></View>
                    <View style={styles.type}><Text style={{fontSize: 20}}>Turnovers</Text></View>
                    <View style={styles.stats}><Text style={{fontSize: 15}}>{this.state.home.turnovers}</Text></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    stats: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Width/3
    },
    type: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Width/3
    },
})