import React, { Component } from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,Dimensions,ScrollView,RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';
import { FlatList } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');


export default class Web extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
            headerNews:[],
            News:[],
            refreshing:false
        };
    }

    componentDidMount() {
        this.getNewsData();
        setTimeout(() => {
            this.setState({
                swiperShow: true
            });
        }, 0)
    }
    renderBanner() {
        if (this.state.swiperShow) {
            return (
                <Swiper 
                    style={styles.wrapper} 
                    height={width*40/75} 
                    showsButtons={true} 
                    autoplay={true} 
                    paginationStyle={styles.paginationStyle} 
                    dotStyle={styles.dotStyle} 
                    activeDotStyle={styles.activeDotStyle}
                    loop={true}
                >
                    {this.state.headerNews.map((item,index)=>(
                    <Image key={index} source={{uri:item.imgsrc}} style={styles.img}/>        
                    ))}
                </Swiper>                
            )
        }
    }
    getNewsData(){
        fetch('http://c.3g.163.com/nc/article/list/T1348649079062/0-20.html')
        .then(response => response.json())
        .then(data => {
            this.setState({
                News:data.T1348649079062,
                headerNews:data.T1348649079062.slice(0,4)
            })
        })
        .catch(error =>alert(error))
    }
    _renderItem=({item})=>(
        <View style={{marginBottom:5, marginTop: 5}}>
            <TouchableOpacity 
                activeOpacity={0.5}
                onPress={()=>{
                    var flag = 'url' in item
                    if(flag){
                        this.props.navigation.navigate('Detail',{url:item.url})}
                    else{
                        alert("This news don't have further web.")}  
                }}
            >
                <View style={styles.newsItem}>
                    <Image style={styles.newsImg} source={{uri:item.imgsrc}} />
                    <View style={styles.newsText}>
                        <Text style={styles.newsTitle}>{item.title}</Text>
                    </View>
                </View>
        </TouchableOpacity>            
        </View>


    )
    render() {
        return (
            <View>
                <View style={styles.container}>
                    {this.renderBanner()}
                </View> 
                <FlatList
                    data={this.state.News}
                    renderItem={this._renderItem}
                    extraData={this.state}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                />               
            </View>

        );
    }
    _onRefresh(){
        this.setState({refreshing:true});
        this.getNewsData();
        this.setState({refreshing:false})
    }
}
const styles = StyleSheet.create({
    container: {
        height:200,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    img: {
        height: width*40/75,
        width: width,
    },
    wrapper: {
        width: width,
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor:'#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor:'#fff',
        borderRadius: 0,
    },
    newsItem:{
        width:width,
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:10
      },
      newsText:{
        width:width*0.6,
        height:80,
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
      },
      newsImg:{
        width:100,
        height:80
      },
      newsTitle:{
        fontSize:16,
        marginBottom:5,
        marginTop:5
      },
      newsDigest:{
        fontSize:12
      }
});