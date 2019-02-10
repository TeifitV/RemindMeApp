import React, {Component} from 'react';
import {View, Image, Text, Button, TouchableOpacity} from 'react-native';
import styles from './Styles.js';
import TaskList from './../TaskList';
import TaskHeader from './../TaskHeader';
//import FloatButton from './../FloatButton';
export default class TaskScreen extends Component{

  render(){
    return (
      <View style={styles.container}>
        <TaskHeader style={styles.TaskHeader}></TaskHeader>
        <TaskList style={styles.TaskList}></TaskList>
          <TouchableOpacity style={styles.FloatButton}>
            <Image style={styles.FloatButtonImage} source={require("./../../images/icon-plus.png")}></Image>
          </TouchableOpacity>
      </View>

    )
  }
}
