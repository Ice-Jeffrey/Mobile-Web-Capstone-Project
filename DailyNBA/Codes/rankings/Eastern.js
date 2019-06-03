import React,{Component} from 'react';
import{View, Text,FlatList,TouchableOpacity,Dimensions,StyleSheet,Image,RefreshControl}from 'react-native';
import teams from '../../assets/team-map'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const east = [0,2,5,7,9,11,13,15,16,18,21,23,25,27,29];
const west = [1,3,4,6,8,10,12,14,17,19,20,22,24,26,28];

class Eastern_Rankings extends Component {
    static navigationOptions = {
        title: 'Eastern Ranking',}
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
        <View style={{marginBottom:10,marginTop:5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{width:width/4+70,justifyContent:'center',fontWeight:'bold'}}>         Team</Text>
                <Text style={{width:width/5,justifyContent:'center',fontWeight:'bold'}}>Wins</Text>
                <Text style={{width:width/5,justifyContent:'center',fontWeight:'bold'}}>Losses</Text>
                <Text style={{width:width/5,justifyContent:'center',fontWeight:'bold'}}>Percentage</Text>
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
        <View >
            {west.indexOf(item.index)=== -1 ?
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Details',{name:item.abbreviation.toLowerCase()})}
            >
                <View style={styles.list}>
                    <Text style={{color:'#860038',width:23,fontWeight:'bold'}}>{east.indexOf(item.index)+1}.</Text>
                    <Image source={teams[item.abbreviation.toLowerCase()].logo} style={{width:50,height:50}}/>
                    <Text style={{width:width/4,justifyContent:'center',}}>  {item.nickname}</Text>
                    <Text style={{width:width/5,justifyContent:'center'}}>{item.team_stats.wins}</Text>
                    <Text style={{width:width/5,justifyContent:'center'}}>{item.team_stats.losses}</Text>
                    <Text style={{width:width/5,justifyContent:'center'}}>{item.team_stats.pct}%</Text>
                </View>                
            </TouchableOpacity>

            :null
            }
           
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
        
    }
})


  export default Eastern_Rankings;