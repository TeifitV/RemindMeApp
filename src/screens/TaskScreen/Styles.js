import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{

    flexDirection:'column'
  },
  TaskHeader: {
    flex:1,
    flexBasis: 600,
    width: '100%',
  },
  TaskList:{
    flex:1,
    width:'100%'
  },
  FloatButton:{
    position:'absolute',
    zIndex:2,
    bottom:20,
    right:20,
    backgroundColor: '#ED184A',
    height:80,
    width:80,
    borderRadius:100,
  },
    FloatButtonImage:{
  //    marginLeft:10,
  //    marginRight:10,
  //    marginTop:5,
      //left:5,
      //width: 20,
      height: 40,
      width: 40,
      marginTop:20,
      marginLeft:20
      //marginBottom:10
    }
});

export default styles;
