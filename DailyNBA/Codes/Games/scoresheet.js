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
            general: this.props.general
        };
    }

    render() {
        return(
            <View style={[{height: Height/8 + Height/6}]}>
            <ScrollView>
                <GamesLayout
                    visitor={this.state.general.visitor.team_key}
                    visitorscore={this.state.general.visitor.score}
                    home={this.state.general.home.team_key}
                    homescore={this.state.general.home.score}
                    status={this.props.status}
                />
                
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
                        <View style={[styles.scorecell, {width: 50}]}><Text>Team</Text></View>
                        {this.state.general.visitor.linescores.period.map( (item) => {
                            return(
                                <View style={{flex: 1}}>
                                <View style={[styles.scorecell]}><Text>{item.period_name}</Text></View>
                                </View>
                        )})}
                        <View style={[styles.scorecell, {width: 50}]}><Text>Total</Text></View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
                        <View style={[styles.scorecell, {width: 50}]}><Text>{this.state.general.visitor.team_key}</Text></View>
                        {this.state.general.visitor.linescores.period.map( (item) => {
                            return(
                                <View style={{flex: 1}}>
                                <View style={[styles.scorecell]}><Text>{item.score}</Text></View>
                                </View>
                        )})}
                        <View style={[styles.scorecell, {width: 50}]}><Text>{this.state.general.visitor.score}</Text></View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
                        <View style={[styles.scorecell, {width: 50}]}><Text>{this.state.general.home.team_key}</Text></View>
                        {this.state.general.home.linescores.period.map( (item) => {
                            return(
                                <View style={{flex: 1}}>
                                <View style={[styles.scorecell]}><Text>{item.score}</Text></View>
                                </View>
                        )})}
                        <View style={[styles.scorecell, {width: 50}]}><Text>{this.state.general.home.score}</Text></View>
                    </View>
                </View>
            </ScrollView>
            </View>
        )
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
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    }
});
  