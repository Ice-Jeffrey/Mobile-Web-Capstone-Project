import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet,ScrollView,Image} from 'react-native';
import playerinfo from '../../assets/teamdata/playerdata';
import team from '../../assets/team-map'

const width=Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class information extends Component{
    static tabBarOptions = ({navigation,screenProps})=>({
        tabStyle:{
            backgroundColor:team[screenProps.name]
        }
    })
    constructor(props){
        super(props)
            this.state = {
                name: this.props.screenProps.name,
                datas: []
            }
    }

    render(){
        return(
            <View>
                <View style={{marginTop:20, backgroundColor: '#F5FCFF', marginLeft: 5}}>
                    <View style={{flexDirection:'row',margin:1}}>
                        <View style={styles.data}>
                            <Text style={styles.text}>Coach:</Text>
                        </View>
                        <Text style={[styles.text,{fontWeight:'500',color:'black'}]}>{playerinfo[this.state.name].basic.resultSets[1].rowSet[0][5]}</Text>                        
                    </View>
                    <View style={{flexDirection:'row',margin:1}}>
                        <View style={styles.data}>
                            <Text style={styles.text}>Conference:</Text>
                        </View>
                        <Text style={[styles.text,{fontWeight:'500',color:'black'}]}>{team[this.state.name].conf}</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:1}}>
                        <View style={styles.data}>
                            <Text style={styles.text}>City:</Text>
                        </View>
                        <Text style={[styles.text,{fontWeight:'500',color:'black'}]}>{team[this.state.name].city}</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:1}}>
                        <View style={styles.data}>
                            <Text style={styles.text}>Founding time:</Text>
                        </View>
                        <Text style={[styles.text,{fontWeight:'500',color:'black'}]}>{team[this.state.name].time}</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:1}}>
                        <View style={styles.data}>
                            <Text style={styles.text}>Home stadium:</Text>
                        </View>
                        <Text style={[styles.text,{fontWeight:'500',color:'black'}]}>{team[this.state.name].stadium}</Text>
                    </View>
                </View> 
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image 
                        source={team[this.state.name].logo}
                        style={styles.image}
                    />
                </View>              
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    data:{
        width:width/2.5,
        alignItems:'center'
    },
    text:{
        fontSize:20,
    },
    image:{
        width:width/1.5,
        height:width/1.5,
        opacity:0.1
    }
})