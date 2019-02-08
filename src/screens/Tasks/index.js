import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import styles from './Styles.js';
export default class Tasks extends Component {
  render() {
    //Always return an element
    //Can only have one parent View
    return (
      <View style={styles.container}>

        <Image
        style={styles.taskCheck}
        source={require("./../../images/icon-circle.png")}></Image>
        <Text>TASK 1</Text>
      </View>
    );
  }
}
