import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native'

//get height and width of the window
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export class Playerstats extends Component {
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

    //get the data from the internet
    componentDidMount() {
        fetch(`http://data.nba.com/data/10s/json/cms/noseason/game/${this.state.date}/${this.state.id}/boxscore.json`)
            .then( response => response.json() )
            .then( data => (
                this.setState({
                    visitor: data.sports_content.game.visitor.players.player,
                    home: data.sports_content.game.home.players.player
                })
                //console.log(this.state.visitor),
                //console.log(this.state.home)  
            ))
            .catch(error => alert(error))
    }

    render() {
        return(
            <View>
                <Text style={styles.title}>{'\n'}Visitor Playerstats</Text>
                <View style={styles.row}>
                    <View style={{width: Width/5}}>
                        <View style={styles.name}><Text>Name</Text></View>
                        <View style={{flex: 1}}>
                        {this.state.visitor.map((item) => {
                                //item.key = item.player_code;
                                return (
                                    <View style={styles.name}>
                                        <ScrollView 
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            <Text>{item.last_name}</Text>
                                        </ScrollView>
                                    </View>
                                )
                        })}     
                        </View>       
                    </View>
                    <View>
                    <ScrollView horizontal={true} style={{width: Width * 4 / 5, flex: 1}}><View>
                        <View style={styles.row}>
                            <View style={styles.cell}><Text>Min</Text></View>
                            <View style={styles.cell}><Text>Pts</Text></View>
                            <View style={styles.cell}><Text>FGs</Text></View>
                            <View style={styles.cell}><Text>3PTs</Text></View>
                            <View style={styles.cell}><Text>FTs</Text></View>
                            <View style={styles.cell}><Text>OReb</Text></View>
                            <View style={styles.cell}><Text>DReb</Text></View>
                            <View style={styles.cell}><Text>Ast</Text></View>
                            <View style={styles.cell}><Text>Stl</Text></View>
                            <View style={styles.cell}><Text>Blk</Text></View>
                            <View style={styles.cell}><Text>Fou</Text></View>
                            <View style={styles.cell}><Text>Tur</Text></View>
                            <View style={styles.cell}><Text>+/-</Text></View>
                        </View>
                        {
                            this.state.visitor.map((item) => {
                                //item.key = item.player_code;
                                return (
                                    <View style={styles.row}>
                                        <View style={styles.cell}><Text>{item.minutes}</Text></View>
                                        <View style={styles.cell}><Text>{item.points}</Text></View>
                                        <View style={styles.cell}><Text>{item.field_goals_made}/{item.field_goals_attempted}</Text></View>
                                        <View style={styles.cell}><Text>{item.three_pointers_made}/{item.three_pointers_attempted}</Text></View>
                                        <View style={styles.cell}><Text>{item.free_throws_made}/{item.free_throws_attempted}</Text></View>
                                        <View style={styles.cell}><Text>{item.rebounds_offensive}</Text></View>
                                        <View style={styles.cell}><Text>{item.rebounds_defensive}</Text></View>
                                        <View style={styles.cell}><Text>{item.assists}</Text></View>
                                        <View style={styles.cell}><Text>{item.steals}</Text></View>
                                        <View style={styles.cell}><Text>{item.blocks}</Text></View>
                                        <View style={styles.cell}><Text>{item.fouls}</Text></View>
                                        <View style={styles.cell}><Text>{item.turnovers}</Text></View>
                                        <View style={styles.cell}><Text>{item.plus_minus}</Text></View>
                                    </View>
                                )
                            })
                        }            
                    </View></ScrollView>    
                    </View>       
                </View>

                <Text style={styles.title}>{'\n'}Home Playerstats</Text>
                <View style={styles.row}>
                    <View style={{width: Width/5}}>
                        <View style={styles.name}><Text>Name</Text></View>
                        <View style={styles.col}>
                            {this.state.home.map((item) => {
                                    //item.key = item.player_code;
                                    return (
                                        <View style={styles.name}>
                                            <ScrollView 
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}
                                            >
                                                <Text>{item.last_name}</Text>
                                            </ScrollView>
                                        </View>
                                    )
                            })}      
                        </View>      
                    </View>
                    <View>
                    <ScrollView horizontal={true} style={{width: Width * 4 / 5, flex: 1}}><View>
                        <View style={styles.row}>
                            <View style={styles.cell}><Text>Min</Text></View>
                            <View style={styles.cell}><Text>Pts</Text></View>
                            <View style={styles.cell}><Text>FGs</Text></View>
                            <View style={styles.cell}><Text>3PTs</Text></View>
                            <View style={styles.cell}><Text>FTs</Text></View>
                            <View style={styles.cell}><Text>OReb</Text></View>
                            <View style={styles.cell}><Text>DReb</Text></View>
                            <View style={styles.cell}><Text>Ast</Text></View>
                            <View style={styles.cell}><Text>Stl</Text></View>
                            <View style={styles.cell}><Text>Blk</Text></View>
                            <View style={styles.cell}><Text>Fou</Text></View>
                            <View style={styles.cell}><Text>Tur</Text></View>
                            <View style={styles.cell}><Text>+/-</Text></View>
                        </View>
                        {
                            this.state.home.map((item) => {
                                //item.key = item.player_code;
                                return (
                                    <View style={styles.row}>
                                        <View style={styles.cell}><Text>{item.minutes}</Text></View>
                                        <View style={styles.cell}><Text>{item.points}</Text></View>
                                        <View style={styles.cell}><Text>{item.field_goals_made}/{item.field_goals_attempted}</Text></View>
                                        <View style={styles.cell}><Text>{item.three_pointers_made}/{item.three_pointers_attempted}</Text></View>
                                        <View style={styles.cell}><Text>{item.free_throws_made}/{item.free_throws_attempted}</Text></View>
                                        <View style={styles.cell}><Text>{item.rebounds_offensive}</Text></View>
                                        <View style={styles.cell}><Text>{item.rebounds_defensive}</Text></View>
                                        <View style={styles.cell}><Text>{item.assists}</Text></View>
                                        <View style={styles.cell}><Text>{item.steals}</Text></View>
                                        <View style={styles.cell}><Text>{item.blocks}</Text></View>
                                        <View style={styles.cell}><Text>{item.fouls}</Text></View>
                                        <View style={styles.cell}><Text>{item.turnovers}</Text></View>
                                        <View style={styles.cell}><Text>{item.plus_minus}</Text></View>
                                    </View>
                                )
                            })
                        }            
                    </View></ScrollView>    
                    </View>       
                </View>           
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 25
    },  
    name: {
        borderWidth: 1,
        borderColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        width: Width/5
    },
    cell: {
        borderWidth: 1,
        borderColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40
    },
    col: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})