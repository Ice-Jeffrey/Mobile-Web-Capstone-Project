import React,{Component} from 'react';
import {View,Text,FlatList,Image,StyleSheet,Dimensions,TouchableOpacity,RefreshControl} from 'react-native';
import teams from '../../assets/team-map';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const east = [0,2,5,7,9,11,13,15,16,18,21,23,25,27,29];
const west = [1,3,4,6,8,10,12,14,17,19,20,22,24,26,28];

  class Western_Rankings extends Component {
    static navigationOptions = {
        title: 'Western Ranking',}
    constructor(props){
        super(props)
        this.state = {
          datas: [],
          refreshing:false
        }
      };
componentDidMount(){
    this.getNewsData();
 
}
    render(){
      return(
        <View style={{marginBottom:20,marginTop:5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{width:width/4+60,justifyContent:'center',fontWeight:'bold',color:'black'}}>        Team</Text>
                <Text style={styles.text}>Wins</Text>
                <Text style={styles.text}>Losses</Text>
                <Text style={styles.text}>Percentage</Text>
            </View>
            <FlatList  
                data = {this.state.datas}
                renderItem={this.renderItem}
                extraData={this.state}  
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }           
            />  
        </View>
      )
    }
    getNewsData(){
        let url = 'http://data.nba.com/data/json/cms/2018/league/standings.json'
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            let newusers =data.sports_content.standings.team;
            for ( var i =0;i<newusers.length;i++){
                Object.assign(newusers[i],{key:''+i})
                Object.assign(newusers[i],{index:i})
                newusers[i].team_stats.pct=newusers[i].team_stats.pct*100;
                newusers[i].team_stats.pct=newusers[i].team_stats.pct.toString();
                newusers[i].team_stats.pct=newusers[i].team_stats.pct.slice(0,2);
            }
            this.setState({datas:newusers})
            console.log(this.state.datas)
        })
        .catch(error => alert(error))
    }
    _onRefresh(){
        this.setState({refreshing:true});
        this.getNewsData();
        this.setState({refreshing:false})
    }
    renderItem=({item})=>(
        <View>
            {east.indexOf(item.index)=== -1 ?
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Details',{name:item.abbreviation.toLowerCase()})}
            >
                <View style={styles.list}>
                    <Text style={styles.textnum}>{west.indexOf(item.index)+1}.</Text>
                    <Image source={teams[item.abbreviation.toLowerCase()].logo} style={{width:50,height:50}}/>
                    <Text style={{width:width/4,justifyContent:'center',color:'black'}}>  {item.nickname}</Text>
                    <Text style={styles.textdata}>{item.team_stats.wins}</Text>
                    <Text style={styles.textdata}>{item.team_stats.losses}</Text>
                    <Text style={styles.textdata}>{item.team_stats.pct}%</Text>
                </View>                
            </TouchableOpacity>
            :null}
        </View>
    )
  }
  const styles = StyleSheet.create({
    list: {
        flex:1,
        flexDirection:'row',
        width:width,
        height:55,
        alignItems:'center'
    },
    text:{
        width:width/5,
        justifyContent:'center',
        fontWeight:'bold',
        color:'black'
    },
    textnum:{
        color:'#860038',
        width:23,
        fontWeight:'bold',
        marginLeft:2,
    },
    textdata:{
        width:width/5,
        justifyContent:'center',
        color:'black'
    }
})

  export default Western_Rankings;