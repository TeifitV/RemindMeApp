import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    //flex:1,
    //height:600,
      //alignSelf: 'stretch',
    //flex:1,
    zIndex:2,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  DateDisplay: {
    zIndex:1,
    width: '100%',
    height: 50,
    marginTop:10
  },
  TaskCounter:{
    zIndex:2,
    width:'100%',
    height: 50,
    marginTop: 20
  },
  userImage:{
    zIndex:2,
    borderWidth:1,
    marginTop: 20,
    marginBottom: 5,
    height:120,
    width: 120,
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius:100
  },
  backgroundImage:{
  //height:600,
    //height: 600,
    alignItems: 'center',
    width: '100%',
    height:'auto',
    alignSelf:"flex-start",
    zIndex:0
  }
});

export default styles;
