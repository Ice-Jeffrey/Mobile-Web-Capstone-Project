import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet,ScrollView} from 'react-native';
import playerinfo from '../../assets/teamdata/playerdata';

const width=Dimensions.get('window').width;
const height = Dimensions.get('window').height;



export default class lineup extends Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.screenProps.name,
            info:[]
        }
    }
    render(){
        return(
            <View style={{flexDirection:'row',margin:5}}>
                <View style={{margin:5}}>
                    <Text style={styles.title}>Name</Text>
                    {playerinfo[this.state.name].basic.resultSets[0].rowSet.map((element,index)=>{
                        return(

                            <View style={{flexDirection:'column',marginBottom:5}}>
                                <Text style={styles.text}>{element[3]}</Text>                                            
                            </View>                                                     
                    )                            
                    })}                    
                </View>
               
                <ScrollView 
                    horizontal={true}
                    keyboardDismissMode={"on-drag"}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{margin:6}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.title1}>Num.</Text>
                            <Text style={styles.title1}>Pos.</Text>
                            <Text style={styles.title1}>Age</Text>
                            <Text style={styles.title1}>Hgt.</Text>
                            <Text style={styles.title1}>Wgt.</Text>
                            <Text style={{width:width/3,alignItems:'center',fontSize:20,fontWeight:'bold',color:'black'}}>Sch.</Text>
                            <Text style={{width:width/2,alignItems:'center',fontSize:20,fontWeight:'bold',color:'black'}}>Bir.</Text>                            
                        </View>

                        {playerinfo[this.state.name].basic.resultSets[0].rowSet.map((element,index)=>{
                            return(
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flexDirection:'column',marginBottom:5}}>
                                        <Text style={styles.text2}>{element[4]}</Text>                                     
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={styles.text2}>{element[5]}</Text>                                     
                                    </View>    
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={styles.text2}>{element[9]}</Text>                                     
                                    </View>    
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={styles.text2}>{element[6]}</Text>                                     
                                    </View> 
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={styles.text2}>{element[7]}</Text>                                     
                                    </View>       
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/3,alignItems:'center',color:'black'}}>{element[11]}</Text>                                     
                                    </View>             
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/2,alignItems:'center',color:'black'}}>{element[8]}</Text>                                     
                                    </View>       
                                </View>
                        
                        )                            
                        })}                        
                    </View>

                </ScrollView>               
            </View>   
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    title1:{
        width:width/5,
        alignItems:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    text2:{
        width:width/5,
        alignItems:'center',
        color:'black'
    }
})