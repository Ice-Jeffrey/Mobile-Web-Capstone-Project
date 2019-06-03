import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import teams from '../../assets/team-map';
import Team from '../rankings/teams';


const height=Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class TeamDeatails extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle:{backgroundColor:teams[navigation.state.params.name].color},
    headerTitle: 
    <View 
      style={[styles.container]} 
    >
      <Image source={teams[navigation.state.params.name].logo} style={{width:45,height:45}}/>
      <Text style={styles.font}>{teams[navigation.state.params.name].team}</Text>
    </View>      

  })
  constructor(props){
    super(props)
    this.state = {
      name: this.props.navigation.state.params.name,
      team: []
    }
  };
  componentDidMount(){
    fetch(`https://stats.nba.com/stats/teaminfocommon?LeagueID=00&SeasonType=Regular+Season&TeamID=1610612749&season=2018-19`)
      .then(response => response.json())
      .then( data=>{
        console.log(data)
      })
      .catch(error =>alert(error))
  }
  render(){
    return ( 
      <Team name={this.state.name}/>
    )
  }
}

  const styles = StyleSheet.create({
      container: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      },
      font:{
        fontSize:30,
        fontStyle: 'normal',
        color:'white',

      }
  })
          



