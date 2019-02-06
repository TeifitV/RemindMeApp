import React, {Component} from 'react';
import {View,Text} from 'react-native';
import styles from './Styles.js';
export default class Tasks extends Component {
  render() {
    //Always return an element
    //Can only have one parent View
    return (
      <View style={styles.container}>
        <Text>TASK</Text>
      </View>
    );
  }
}
