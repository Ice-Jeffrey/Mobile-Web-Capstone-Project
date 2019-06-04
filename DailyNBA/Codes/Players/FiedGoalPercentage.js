import React,{ Component } from 'react';
import { FlatList, Text, View, Image,TouchableOpacity,TextInput, StyleSheet,Dimensions,Button} from "react-native";
import Players from '../../assets/players/PlayerRankDatas';
export default class FGP extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    static navigationOptions = {
        title: 'FGP',
    };
    
   RenderItem = (item) => {
       const num = item.index + 1+'.';
       const name = item.item.name;
       const score = item.item.scores;
       const team = item.item.team;
       const sign = "   "+item.item.num;
       const aurl = item.item.avator;
       if (item.index === 0) return (
        <View style={styles.HeadEachPlayerStyle}>
            <View >
                <Image source={require('../../assets/playerImage/mente.png')}
                    style={styles.HeadImagestyle} />
            </View>
               <View style={styles.Head}>
               <Text style={styles.HeadScoreStyle}>
                    {score}
                    </Text>
                <TouchableOpacity
                    activeOpacity={0.2}
                    focusedOpacity={0.5}
                    onPress={() => this.props.navigation.navigate('Details', {
                        Person_Id: name
                    })}
                    style={styles.MyButton}>
                        <Text style={styles.NameStyle}>
                            {name}
                        </Text>
                    </TouchableOpacity>
                <Text style={styles.TeamStyle}>
                    {team}
                </Text>
                <Text style={styles.SignStyle}>
                    {sign}
                </Text>
            </View>
    </View>
       )
        else return (
           <View style={styles.EachPlayerStyle}>
                <Text style={styles.NumStyle}>
                   {num}
               </Text>
               <View >
                   <Image source={aurl}
                        style={styles.imagestyle} />
               </View >
               <View style={{width:Dimensions.get('window').width/7*4}}>
               <TouchableOpacity
                activeOpacity={0.2}
                focusedOpacity={0.5}
                   onPress={() => this.props.navigation.navigate('Details', {
                       Person_Id: name
                })}
                style={styles.MyButton}>
                    <Text style={styles.NameStyle}>
                        {name}
                    </Text>
                   </TouchableOpacity>
                <View style={{flexDirection:"row"}}>
                   <Text style={styles.TeamStyle}>
                        {team}
                    </Text>
                    <Text style={styles.SignStyle}>
                        {sign}
                    </Text>
                </View>
               </View>
               <Text style={styles.ScoreStyle}>
                   {score}
               </Text>
           </View>
       );
    }
    render() {
        let datas = [];
        datas = [...Players];
        let datass = datas[4];
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.bgView}>
                    <FlatList
                        style={styles.FlatListStyle}
                        ref={(flatList) => (this.flatList = flatList)}
                        data={datass}
                        renderItem={this.RenderItem}
                        keyExtractor={(item, index) => index}
                    />
                </View>
         </View>
          )
        }
    
}
 
const styles = StyleSheet.create({
    bgView: {
        flex:1
        
    },
    FlatListStyle: {
        //flex:1
    },
    EachPlayerStyle: {
        flexDirection: "row",
        alignItems:"center",
        height: Dimensions.get('window').height / 10,
        margin:4
        
    },
    NumStyle: {
        color: 'black',
        fontSize: 30,
        color:'purple'
    },
    NameStyle: {
        color: 'black',
        fontSize:22
        
    },
    ScoreStyle: {
        color: 'black',
        textAlign: "right",
        fontSize:25
    },
    MyButton: {
        
    },
    TeamStyle: {
        
    },
    imagestyle: {
        height: Dimensions.get('window').height / 10,
        width: Dimensions.get('window').width / 6,
        borderRadius:15
    },
    HeadEachPlayerStyle: {
        flexDirection: "row",
        alignItems:"center",
        height: Dimensions.get('window').height / 5 * 2,
        backgroundColor:"brown"
    },
    HeadImagestyle: {
        height: Dimensions.get('window').height / 5*2,
        width: Dimensions.get('window').width / 9*4
    },
    HeadScoreStyle: {
        color: 'black',
        fontSize: 60,
        fontWeight:"600"
    },
    Head: {
        alignItems: "center",
    }


})