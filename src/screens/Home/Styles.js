import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff023d',
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 285,
    height: 75,
    marginTop:100
  },
  button:{
    width: 325,
    height: 55,
    alignItems: 'center',
    borderRadius:100,
    borderWidth:2,
    borderColor:'white',
    backgroundColor: '#ff023d'
  },
  avatarsImage:{
    //width:'90%'
  },
  buttonText:{
    color:'white',
    fontFamily: 'Roboto',
    marginTop: 10,
    fontSize:20
  }
});

export default styles;
