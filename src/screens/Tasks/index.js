import React, {Component} from 'react';
import {View,Text} from 'react-native';
import styles from './../Home/HomeStyles.js'
export default class Tasks extends Component {
  render() {
    //Always return an element
    //Can only have one parent View
    return (
      <View style={styles.container}>
        <Text>TASKS SCREEN</Text>
      </View>
    );
  }
}
