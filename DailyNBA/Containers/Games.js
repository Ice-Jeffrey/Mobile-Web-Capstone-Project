import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import address from '../assets/address'
import {GamesLayout} from '../Codes/gameslayout'
import {Scoresheet} from '../Codes/scoresheet'
import {Leaders} from '../Codes/leaders'
import {Teamstats} from '../Codes/teamstats'
import {Playerstats} from '../Codes/playerstats'


//get height and width of the window
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

class Games extends Component {
  constructor(props) {
      super(props);
      this.state = {
          address: address.gameGeneral,
          games: [

          ]
      }
  }

  //get the data from the internet
  componentDidMount() {
    fetch(`http://data.nba.com/data/5s/json/cms/noseason/scoreboard/20181225/games.json`)
      .then( response => response.json() )
      .then(data => {
        this.setState({games: data.sports_content.games.game});
        //console.log(this.state.games)
      })
      .catch(error => alert(error))
  }

  _renderItem = ({item}) =>  {
    return(
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Details', {
            date: item.date,
            id: item.id,
            visitor: item.visitor.team_key,
            home: item.home.team_key,
            general: item,
            status: item.period_time.period_status,
          })}
        >
          <GamesLayout
            visitor={item.visitor.team_key}
            visitorscore={item.visitor.score}
            home={item.home.team_key}
            homescore={item.home.score}
            status={item.period_time.period_status}
          />
        </TouchableOpacity>
      </View>
    )
  }

  render()
  {
    return(
      <FlatList
        data={this.state.games}
        extraData={this.state}
        keyExtractor={item => item.id}
        renderItem={this._renderItem}
      />
    )
  }
}

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
      <ScrollView>
        <View><Scoresheet general={this.state.general} status={this.state.status}/></View>
        <View><Leaders id={this.state.id} date={this.state.date}/></View>
        <View><Teamstats id={this.state.id} date={this.state.date}/></View>
        <View><Playerstats id={this.state.id} date={this.state.date}/></View>
      </ScrollView>
    );
  }  
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Games,
    },
    Details: {
      screen: GameDetails,
    },
  }, 
  {
    initialRouteName: 'Home',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

export default createAppContainer(AppNavigator);