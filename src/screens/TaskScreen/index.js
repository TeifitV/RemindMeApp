import React, {Component} from 'react';
import {View, Image, Text, Button, TouchableOpacity} from 'react-native';
import styles from './Styles.js';
import TaskList from './TaskList';
import TaskHeader from './TaskHeader';
export default class TaskScreen extends Component{

  render(){
    return (
      <View>
        <TaskHeader></TaskHeader>
        <TaskList><TaskList>
      </View>
    )
  }
}
