import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import address from '../assets/address'
import {GamesLayout} from '../Codes/gameslayout'

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
      })
      .catch(error => alert(error))
  }

  _renderItem = ({item}) =>  {
    return(
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Details', {
            id: item.id,
            visitor: item.visitor.team_key,
            home: item.home.team_key
          })}
        >
          <GamesLayout
            visitor={item.visitor.team_key}
            visitorscore={item.visitor.score}
            home={item.home.team_key}
            homescore={item.home.score}
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
      id: this.props.navigation.getParam('id', '0'),
      details: this.props.navigation.getParam('details', 'null'),
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
    console.log(this.state.details)
    return (
      <ScrollView>
        <View style={styles.container}>
          <GamesLayout
            visitor={this.state.details.visitor.team_key}
            visitorscore={this.state.details.visitor.score}
            home={this.state.details.home.team_key}
            homescore={this.state.details.home.score}
          />
        
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
              <View style={[styles.scorecell, {width: 40}]}><Text>teams</Text></View>
              {this.state.details.visitor.linescores.period.map( (item) => {
                return(
                <View style={{flex: 1}}>
                  <View style={[styles.scorecell]}><Text>{item.period_name}</Text></View>
                </View>
              )})}
              <View style={[styles.scorecell, {width: 40}]}><Text>Total</Text></View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
              <View style={[styles.scorecell, {width: 40}]}><Text>{this.state.details.visitor.team_key}</Text></View>
              {this.state.details.visitor.linescores.period.map( (item) => {
                return(
                <View style={{flex: 1}}>
                  <View style={[styles.scorecell]}><Text>{item.score}</Text></View>
                </View>
              )})}
              <View style={[styles.scorecell, {width: 40}]}><Text>{this.state.details.visitor.score}</Text></View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
              <View style={[styles.scorecell, {width: 40}]}><Text>{this.state.details.home.team_key}</Text></View>
              {this.state.details.home.linescores.period.map( (item) => {
                return(
                <View style={{flex: 1}}>
                  <View style={[styles.scorecell]}><Text>{item.score}</Text></View>
                </View>
              )})}
              <View style={[styles.scorecell, {width: 40}]}><Text>{this.state.details.home.score}</Text></View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Games,
  },
  Details: {
    screen: GameDetails,
  },
}, {
    initialRouteName: 'Home',
});

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

export default createAppContainer(AppNavigator);