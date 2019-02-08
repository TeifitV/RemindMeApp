/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './screens/Home';
import TaskScreen from './screens/TaskScreen';
/** const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/


const Screens = createStackNavigator({
  Home: {
    screen: Home
  },
  TaskScreen: {
    screen: TaskScreen
  },
},{
  headerMode: 'none'
  });

  export default createAppContainer(Screens);
