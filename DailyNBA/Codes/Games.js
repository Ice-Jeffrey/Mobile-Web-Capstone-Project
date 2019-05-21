import react, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import address from '../assets/address'

//get height and width of the window
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: address,
            games: [

            ]
        }
    }

    //get the data from the internet
    componentWillMount() {
        fetch(this.state.address.gameGeneral)
            .then(response => response.json() )
            .then(data => {
                this.setState({games: data});
            })
            .catch(error => alert(error))
    }

    _renderItem({item}, index) 
    {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.box}>
                        <View style={styles.team}>
                            <Image />
                            <Text>AWAY</Text>    
                        </View>
                        <Text>{this.state.games[index].visitor.score}</Text>
                        <Text>V.S.</Text>
                        <Text>{this.state.games[index].home.score}</Text>
                        <View style={styles.team}>
                            <Image />
                            <Text>HOME</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            
        )
    }

    render()
    {
        return()
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        height: Height/6,
    },
    team: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    teamImage: {

    }
  });