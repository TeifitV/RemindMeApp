import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import styles from './Styles.js';
import DateDisplay from './../DateDisplay';
export default class TasksHeader extends Component {
  render() {
    //Always return an element
    //Can only have one parent View
    return (
      <View style={styles.container}>
        <Image source='./../Images/user-avatar.png'></Image>
        <TaskCounter></TaskCounter>
        <DateDisplay></DateDisplay>
      </View>
    );
  }
}
