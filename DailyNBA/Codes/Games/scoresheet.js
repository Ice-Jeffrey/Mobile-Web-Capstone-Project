import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'
import {GamesLayout} from './gameslayout'

//get height and width of the window
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export class Scoresheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            date: this.props.date,
            general: this.props.general,
            visitor: [],
            home: [],
            visitorperiod: [],
            homeperiod: [],
        };
    }

    componentDidMount() {
        fetch(`http://data.nba.com/data/10s/json/cms/noseason/game/${this.state.date}/${this.state.id}/boxscore.json`)
            .then( response => response.json() )
            .then( data => (
                this.setState({
                    visitor: data.sports_content.game.visitor,
                    home: data.sports_content.game.home,
                    visitorperiod: data.sports_content.game.visitor.linescores.period,
                    homeperiod: data.sports_content.game.home.linescores.period
                })
            ))
            .catch(error => alert(error)),
        console.log(this.props.general)
    }

    render() {
        return( 
            <View style={[{height: Height/8 + Height/6}]}>
            
                {<GamesLayout
                    visitor={this.state.general.visitor.team_key}
                    visitorscore={this.state.general.visitor.score}
                    home={this.state.general.home.team_key}
                    homescore={this.state.general.home.score}
                    status={this.props.status}
                />}
                
                <View style={{ 
                    flex: 1, 
                    alignItems: 'center', 
                    justifyContent: 'flex-start', 
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor: '#f5f5f5',
                    marginLeft: 1,
                    marginRight: 1,
                    heigth: Height * 7/24
                }}>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
                        <View style={[styles.scorecell, {width: 50}]}><Text>Team</Text></View>
                        {this.state.visitorperiod.map( (item) => {
                            return(
                                <View style={{flex: 1}}>
                                <View style={[styles.scorecell]}><Text>{item.period_name}</Text></View>
                                </View>
                        )})}
                        <View style={[styles.scorecell, {width: 50}]}><Text>Total</Text></View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
                        <View style={[styles.scorecell, {width: 50}]}><Text>{this.state.visitor.team_key}</Text></View>
                        {this.state.visitorperiod.map( (item) => {
                            return(
                                <View style={{flex: 1}}>
                                <View style={[styles.scorecell]}><Text>{item.score}</Text></View>
                                </View>
                        )})}
                        <View style={[styles.scorecell, {width: 50}]}><Text>{this.state.visitor.score}</Text></View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
                        <View style={[styles.scorecell, {width: 50}]}><Text>{this.state.home.team_key}</Text></View>
                        {this.state.homeperiod.map( (item) => {
                            return(
                                <View style={{flex: 1}}>
                                <View style={[styles.scorecell]}><Text>{item.score}</Text></View>
                                </View>
                        )})}
                        <View style={[styles.scorecell, {width: 50}]}><Text>{this.state.home.score}</Text></View>
                    </View>
                </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    box: {
      flex: 1,
      flexDirection: 'row',
      height: Height/8,
    },
    team: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    teamImage: {
      height: Height/8 - 30,
      width: 40
    },
    score: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scorecell: {
      height: Height/18,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    }
});
  