import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import {GamesLayout} from './gameslayout'

class GameSheet extends Component {
    static navigationOptions = {
        title: `${Date().slice(0,15)}`,
    };

  constructor(props) {
      super(props);
      this.state = {
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    }
});

export default GameSheet;  