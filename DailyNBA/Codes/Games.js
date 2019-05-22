import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import address from './assets/address'
import teams from './assets/team_map'

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
          .then(console.log(this.state.address))
          .catch(error => alert(error))
  }

  _renderItem = ({item}) =>  {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Details', {
            id: item.id,
            visitor: item.visitor.team_key,
            home: item.home.team_key
          })}
        >
          <View style={styles.box}>
            <View style={styles.team}>
              <Image
                style={styles.teamImage}
                source={teams[item.visitor.team_key].logo} 
              />
              <Text>AWAY</Text>    
            </View>
            <View style={styles.score}><Text>{item.visitor.team_key}</Text></View>
            <View style={styles.score}><Text>{item.visitor.score} - {item.home.score}</Text></View>
            <View style={styles.score}><Text>{item.home.team_key}</Text></View>
            <View style={styles.team}>
              <Image
                style={styles.teamImage}
                source={teams[item.home.team_key].logo}
              />
              <Text>HOME</Text>    
            </View>
          </View>
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
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
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
  }
});

export default createAppContainer(AppNavigator);