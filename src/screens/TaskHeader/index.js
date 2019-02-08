import React, {Component} from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';
import styles from './Styles.js';
import DateDisplay from './../DateDisplay';
import TaskCounter from './../TaskCounter';
export default class TasksHeader extends Component {
  render() {
    //Always return an element
    //Can only have one parent View
    return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require("./../../images/tasks-bg.jpg")}>

          <Image style={styles.userImage} source={require("./../../images/user-avatar.png")}></Image>
          <TaskCounter style={styles.TaskCounter}></TaskCounter>
          <DateDisplay  style={styles.DateDisplay}></DateDisplay>
      </ImageBackground>
    </View>
    );
  }
}
