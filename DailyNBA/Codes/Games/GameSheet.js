import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, FlatList, Text} from 'react-native'
import {GamesLayout} from './gameslayout'

class GameSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      games: [

      ]
    }
  }

  //get the data from the internet
  componentDidMount() {
    let s = this.props.date;
    var y = parseInt(s.substr(0,4), 10);
    var m = parseInt(s.substr(4,2), 10)-1;
    var d = parseInt(s.substr(6,2), 10);
    var dt = new Date(y, m, d-1);
    y = dt.getFullYear();
    m = dt.getMonth()+1;
    d = dt.getDate();
    m = m>9 ? m : "0"+m;
    d = d>9 ? d : "0"+d;
    this.setState({date: y+''+m+''+d});
    fetch(`http://data.nba.com/data/5s/json/cms/noseason/scoreboard/${y+''+m+''+d}/games.json`)
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
          <View style={{borderWidth: StyleSheet.hairlineWidth}}>
            <GamesLayout
              visitor={item.visitor.team_key}
              visitorscore={item.visitor.score}
              home={item.home.team_key}
              homescore={item.home.score}
              status={item.period_time.period_status}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render()
  {
    return (
      this.state.games.length === 0 ? 
      (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>
          No games on the current date.
        </Text>
      </View>)
      :
      (<FlatList
        data={this.state.games}
        extraData={this.state}
        keyExtractor={item => item.id}
        renderItem={this._renderItem}
      />)     
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