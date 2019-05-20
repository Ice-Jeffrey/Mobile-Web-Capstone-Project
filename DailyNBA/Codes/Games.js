import react, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
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

    render() 
    {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.box}>

                    </View>
                </TouchableOpacity>
            </View>
            
        )
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