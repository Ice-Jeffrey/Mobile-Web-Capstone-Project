import react, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'
import '../assets/address'

//get height and width of the window
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
    }
  });