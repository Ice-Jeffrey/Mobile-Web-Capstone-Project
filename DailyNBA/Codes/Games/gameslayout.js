import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'

import teams from '../../assets/team-map'

//get height and width of the window
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export class GamesLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitor: this.props.visitor,
      home: this.props.home
    }
  }

  render()  {
    return ( 
      <View style={styles.box}>
        <View style={styles.team}>
          <Image
            style={styles.teamImage}
            source={teams[this.props.visitor.toLowerCase()].logo} 
          />
          <Text>VISITOR</Text>    
        </View>
        <View style={styles.score}><Text style={styles.text}>{this.props.visitor}</Text></View>
        <View style={styles.score}><Text>{this.props.visitorscore} - {this.props.homescore}</Text></View>
        <View style={styles.score}><Text style={styles.text}>{this.props.home}</Text></View>
        <View style={styles.team}>
          <Image
            style={styles.teamImage}
            source={teams[this.props.home.toLowerCase()].logo}
          />
          <Text>HOME</Text>    
        </View>
        <View style={{width: Width/12, alignItems: 'center', justifyContent: 'center', marginRight: 3}}><Text>{this.props.status}</Text></View>
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
    width: 60,
    borderRadius: 30
  },
  score: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Width - 2*60 - Width/12
  },
  text: {
    fontSize: 18
  }
});