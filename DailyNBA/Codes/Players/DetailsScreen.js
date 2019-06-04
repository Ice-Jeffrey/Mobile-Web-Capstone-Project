import React,{ Component } from 'react';
import { FlatList, Text, View, Image,TouchableOpacity, StyleSheet,Dimensions,Button} from "react-native";
import Playersinfo from '../../assets/players/PlayersDetasdatas';
const items = ["GP", "W", "L", "W_PCT", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "TOV", "STL", "BLK", "BLKA", "PF", "PFD", "PTS", "PLUS_MINUS", "NBA_FANTASY_PTS", "DD2", "TD3"];

export default class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerinfo: Playersinfo
        };
    }
    static navigationOptions = {
        title: 'PLAYER_DETAILS',
        headerStyle: {
            backgroundColor: '#0099CC'
        },
        headerTintColor: 'white'
    };
    
    RenderItem = (item) => {
        return (
            <View style={styles.dlittleboxheadstyle}>
                <View style={styles.dplayerinfostyle}> 
                    <Text style={{color:"black",fontSize:20,fontWeight:"350"}}>
                        {item.item.dataitem}
                    </Text>
                </View>
                <View style={styles.ddatastyle}>
                    <Text style={{color:"black", fontSize: 18}}>
                        {item.item.data}
                    </Text>
                </View>
                <View style={styles.drankstyle}>
                    <Text style={{color:"black", fontSize: 18}}>
                        {item.item.rank}
                    </Text>
                </View>
            </View>
        );
    }


    render() {
        let ID1 = this.props.navigation.getParam('PersonId');
        let ID2 = this.props.navigation.getParam('Person_Id');
        var playername;
        if (ID2 == undefined) playername = ID1;
        else playername = ID2;
        //if (ID2.length > 0) datas = Playersinfo[ID2];
        let Datas = Playersinfo[playername];
        let array = [];
        var cnt = 0;
        for (let i = 3; i <= 31; i++)
        {
            array.push({
                dataitem:items[cnt++],
                data: Datas[i],
                rank: Datas[i + 29]               
            })
        }
        return (
            <View style={{ flex: 1 }}>
                <View style={{ borderRadius: 20, backgroundColor: 'pink'}}>
                    <View style={styles.headstyle}>
                    <Text style={styles.namestyle}>
                        {Datas[2]}
                    </Text>                   
                    </View>
                    <View style={styles.littleboxheadstyle}>
                        <View style={styles.playerinfostyle}>
                        <Text style={{fontSize:20,fontWeight:"500",color:"black"}}>
                        PLAYER_INFO  
                        </Text>
                        </View>
                        <View style={styles.datastyle}>
                        <Text style={{fontSize:20,fontWeight:"500",color:"black"}} >
                            DATA
                        </Text>
                        </View>
                        <View style={styles.rankstyle}>
                        <Text style={{fontSize:20,fontWeight:"500",color:"black"}}>
                            RANKS
                        </Text> 
                        </View>
                    </View>
                </View>
                <FlatList
                        style={styles.FlatListStyle}
                        ref={(flatList) => (this.flatList = flatList)}
                        data={array}
                        renderItem={this.RenderItem}
                        keyExtractor={(item, index) => index}
                />
                                     
        </View>);
    }
}

const styles = StyleSheet.create({
    headstyle: {
        backgroundColor: "pink",
        alignItems: "center",
        height: Dimensions.get('window').height / 13,
    },
    namestyle: {
        fontSize: 40,
        fontWeight: "500",
        color:"black",
        
    },
    littleboxheadstyle: {
        flexDirection: "row",
        height: Dimensions.get('window').height / 15,
        backgroundColor: "#FFFF99",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    playerinfostyle: {
        width: Dimensions.get('window').width / 2,
        justifyContent: "center",
        alignItems:"center"
    },
    datastyle: {
        width: Dimensions.get('window').width /4,
        justifyContent: "center",
        alignItems:"center"
    },
    rankstyle:{
       width: Dimensions.get('window').width / 4,
       justifyContent: "center",
       alignItems:"center"
    },
    dlittleboxheadstyle: {
        flexDirection: "row",
        height: Dimensions.get('window').height / 18,
    },
    dplayerinfostyle: {
        width: Dimensions.get('window').width / 2,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor:"silver"
    },
    ddatastyle: {
        width: Dimensions.get('window').width / 4,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor:"silver"
    },
   drankstyle:{
       width: Dimensions.get('window').width / 4,
       justifyContent: "center",
       alignItems: "center",
       borderWidth: 1,
       borderColor:"silver"
   },
   FlatListStyle: {
       marginBottom: 0
   }
})