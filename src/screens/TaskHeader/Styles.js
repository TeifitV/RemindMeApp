import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    //flex:1,
    height:600,
      //alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  DateDisplay: {
    width: 285,
    height: 75,
    marginTop:100
  },
  TaskCounter:{
    width:'100%',
    height: 200,
    marginTop: 100
  },
  userImage:{
    borderWidth:1,
    marginTop: 25,
    height:120,
    width: 120,
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius:100
  },
  backgroundImage:{
  height:600,
    //height: 600,
    alignItems: 'center',
    width: '100%'
  }
});

export default styles;
