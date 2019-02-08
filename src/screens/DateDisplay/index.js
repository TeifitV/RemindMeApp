import React, {Component} from 'react';
import {View,Text} from 'react-native';
import styles from './Styles.js';

export default class DateDisplay extends Component{

  getDate(){
    return 'f';
  }
  parseDate(){
    return "SABADO 27 DE ENERO 2018";
  }
  render(){
    return(
      <View style={styles.container}>

        <Text style={styles.DateDisplay}>{this.parseDate()}</Text>
      </View>
    )
  }
}
