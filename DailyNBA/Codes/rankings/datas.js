import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet,ScrollView} from 'react-native';
import playerinfo from '../../assets/teamdata/playerdata';

const width=Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default datas = ({props}) => {
    return(
        <ScrollView>
            <View style={{flexDirection:'row',marginLeft:5,marginTop:10}}>
                <View style={styles.title}>
                    <Text style={styles.text1}>2018-19</Text>                        
                </View>
                <View style={styles.title}>
                    <Text style={styles.text1}>Data</Text>                        
                </View>
                <View style={styles.title}>
                    <Text style={styles.text1}>Rank</Text>
                </View>   
            </View>
            {playerinfo[props.screenProps.name].info.resultSets[0].rowSet[0].map((element,index) => {
                if(index>=4&&index<=29){
                    return(
                        <View style={{flexDirection:'row',margin:3}}>
                            <View style={{width:width/3,alignItems:'center'}}>
                                <Text style={styles.text}>{playerinfo[props.screenProps.name].info.resultSets[0].headers[index]}</Text>                        
                            </View>
                            <View style={{width:width/3,alignItems:'center'}}>
                                <Text style={styles.text}>{element}</Text>                        
                            </View>
                            <View style={{width:width/3,alignItems:'center'}}>
                                <Text style={styles.text}>{playerinfo[props.screenProps.name].info.resultSets[0].rowSet[0][index+26]}</Text>   
                            </View>
                        </View>                                               
                    )
                }
        })}                                 

        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    text1:{
        fontSize:20,
        fontWeight:'bold', 
        color: 'black',
    },
    title:{
        width:width/3,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:StyleSheet.hairlineWidth,
    }
})