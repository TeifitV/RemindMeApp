import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import styles from './Styles.js';
import DateDisplay from './../DateDisplay';
export default class TaskList extends Component {
  render() {
    //Always return an element
    //Can only have one parent View
    return (
      <View style={styles.container}>
        <Image source='./../Images/user-avatar.png'></Image>
        <DateDisplay></DateDisplay>
      </View>
    );
  }
}
