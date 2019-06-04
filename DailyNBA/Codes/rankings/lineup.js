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
                    <Text style={{fontSize:20,fontWeight:'bold'}}>name</Text>
                    {playerinfo[this.state.name].basic.resultSets[0].rowSet.map((element,index)=>{
                        return(

                            <View style={{flexDirection:'column',marginBottom:5}}>
                                <Text>{element[3]}</Text>                                            
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
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Number</Text>
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Position</Text>
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Age</Text>
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Height</Text>
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Weight</Text>
                            <Text style={{width:width/3,alignItems:'center',fontSize:20,fontWeight:'bold'}}>School</Text>
                            <Text style={{width:width/2,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Birth Date</Text>                            
                        </View>

                        {playerinfo[this.state.name].basic.resultSets[0].rowSet.map((element,index)=>{
                            return(
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flexDirection:'column',marginBottom:5}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[4]}</Text>                                     
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[5]}</Text>                                     
                                    </View>    
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[9]}</Text>                                     
                                    </View>    
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[6]}</Text>                                     
                                    </View> 
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[7]}</Text>                                     
                                    </View>       
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/3,alignItems:'center'}}>{element[11]}</Text>                                     
                                    </View>             
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/2,alignItems:'center'}}>{element[8]}</Text>                                     
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