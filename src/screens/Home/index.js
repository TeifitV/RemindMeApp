import React, {Component} from 'react';
import {View, Image, Text, Button, TouchableOpacity} from 'react-native';
import styles from './Styles.js';
/** const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

export default class Home extends Component {

  goToHome(){
    this.props.navigation.navigate('TaskScreen');
  }
  render() {
    //Always return an element
    //Can only have one parent View
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./../../images/remindMe-lLogo.png")}></Image>
        <TouchableOpacity
        title="Comenzar"
        style={styles.button}
        onPress={this.goToHome.bind(this)}
        >
          <Text style={styles.buttonText}>COMENZAR</Text>
        </TouchableOpacity>
        <Image style={styles.avatarsImage} source={require("./../../images/avatars.png")}></Image>
      </View>
    );
  }
}
