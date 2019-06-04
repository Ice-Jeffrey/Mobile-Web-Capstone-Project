import React,{Component} from 'react'
import {TouchableOpacity, Button, DatePickerAndroid} from 'react-native'
import {Icon} from 'react-native-elements'

export class DatePicker extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        DatePickerAndroid.open()
            .then( result => {
                if(result.action !== DatePickerAndroid.dismissedAction)
                {
                    let year = result.year;
                    let month = `${result.month+1}`;
                    let day = result.day;
                    if(month.length === 1)
                        month = 0 + month;
                        
                    if(day < 10)
                        this.props.navigation.navigate('SearchResult', {
                        date: year + month + 0 + day
                        })
                    else
                        this.props.navigation.navigate('SearchResult', {
                            date: year + month + day
                        })    
                }
                    
            })
            .catch(error => alert(error));
    }

    render()  {
        return (
            <TouchableOpacity 
                onPress={() => this.onPress()}
            >
                <Icon
                    name='calendar'
                    type='antdesign' 
                />
            </TouchableOpacity>
        )
    }
}