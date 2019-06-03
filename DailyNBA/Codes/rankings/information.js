import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet,ScrollView} from 'react-native';
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
            <View style={{marginTop:20}}>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Coach:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{playerinfo[this.state.name].basic.resultSets[1].rowSet[0][5]}</Text>                        
                </View>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Conference:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{team[this.state.name].conf}</Text>
                </View>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>City:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{team[this.state.name].city}</Text>
                </View>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Founding time:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{team[this.state.name].time}</Text>
                </View>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Home stadium:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{team[this.state.name].stadium}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    data:{
        width:width/2,
        alignItems:'center'
    },
    text:{
        fontSize:20,
    }
})