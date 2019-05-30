import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
import {Scoresheet} from './scoresheet'
import {Leaders} from './leaders'
import {Teamstats} from './teamstats'
import {Playerstats} from './playerstats'

class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.navigation.getParam('date', '00000000'),
      id: this.props.navigation.getParam('id', '0'),
      general: this.props.navigation.getParam('general', 'null'),
      status: this.props.navigation.getParam('status','final')
    }
  }

  static navigationOptions = ({ navigation }) => {
    let visitor = navigation.getParam('visitor','nothing');
    let home = navigation.getParam('home', 'nothing');
    let title = visitor + ' - ' + home;
    return {
      title: title,
    };
  };

  render() {
    return (
      <View>
        <View><Scoresheet general={this.state.general} status={this.state.status}/></View>
        <ScrollView>
          <View><Leaders id={this.state.id} date={this.state.date}/></View>
          <View><Teamstats id={this.state.id} date={this.state.date}/></View>
          <View><Playerstats id={this.state.id} date={this.state.date}/></View>
        </ScrollView>
      </View>
    );
  }  
}

export default GameDetails