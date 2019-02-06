import React, {Component} from 'react';
import {View,Text} from 'react-native';
import styles from './Styles.js';
export default class TasksCounter extends Component {
  countTasks(){
    return 6;
  }
  render() {
    //Always return an element
    //Can only have one parent View
    return (
      <View style={styles.container}>
        <Text>`${countTasks()} Pendientes`</Text>
      </View>
    );
  }
}
