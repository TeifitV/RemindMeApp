import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection:'row',
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:"#d3d9e5",
    marginTop:10
  },
  text: {
    flex:1,
    //width: '100%',
    height: 30,
    fontSize: 20,
    fontFamily:'Roboto',
    color:'grey'
  },
  taskCheck:{
    marginLeft:10,
    marginRight:10,
    marginTop:5,
    flexBasis:20,
    //left:5,
    //width: 20,
    height: 20,
    marginBottom:10
  }
});

export default styles;
