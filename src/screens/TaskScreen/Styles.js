import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{

    flexDirection:'column'
  },
  TaskHeader: {
    backgroundColor: '#ED184A',
    //flex:.8,
      height: 600,
    width: '100%',
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
    height: 55
  },
  TaskList:{
  height:'66%',
  width: '100%'
  }
});

export default styles;
