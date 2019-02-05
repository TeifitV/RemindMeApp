import React, {Component} from 'react';
import {View,Text} from 'react-native';
import styles from './Styles.js';

export default class DateDisplay extends Component{

  getDate(){

  }
  parseDate(){
    return "February 6 2019";
  }
  render(){
    return{
      <View style={styles.container}>
        <Image
        style={styles.container}
        source="./../../images/icon.circle.jpg"></Image>
        <Text style={styles.DateDisplay}>parseDate()</Text>
      </View>
    }
  }
}
