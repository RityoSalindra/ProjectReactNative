import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
    render(){
        return(
            <Text style={salon.judul}>{this.props.title}</Text>
        )
    }
}
const salon = {
    judul: {
        color: '#f00',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#0f0'
    }
}
export default Judul;