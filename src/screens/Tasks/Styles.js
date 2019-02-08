import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height:800,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    flex:2,
    width: '100%',
    height: 80,
    marginTop:100,
    fontSize: 20,
    color:'black'
  },
  taskCheck:{
    flex:1,
    width: 20,
    height: 20
  }
});

export default styles;
