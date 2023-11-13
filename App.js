import { StyleSheet, View } from 'react-native';
import MyBackendApp from './components/MyBackendApp';

export default function App() {
  
  return (
    <View style={styles.container}>
    <MyBackendApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'magenta',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:30,
    backgroundColor:'red',
    width:'100%',
    textAlign:'center',
  }
});







