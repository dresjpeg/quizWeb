import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1conte}/>
        <View style={styles.box1}/>  

      <View style={styles.box2conte}>
        <View style={styles.box2}/>
        <View style={styles.box2}/>
        <View style={styles.box2}/>
      </View>      

      <View style={styles.box3conte}>
        <View style={styles.box3}/> 
      </View>

      <View style={styles.box4conte}>
        <View style={styles.box4}/>
        <View style={styles.box4}/>
        <View style={styles.box4}/>
      </View>

      <View style={styles.box5conte}>
        <View style={styles.box5}/>
        <View style={styles.box5}/>
        <View style={styles.box5}/>
      </View>

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  box1conte: {
    backgroundColor: '',
    margin: 2,
    alignContent:'center'
  },
  box1: {
    borderBlockColor: 'black',
    borderWidth: 2,
    borderRadius:5, 
    height: 150,
    width: 335,
    margin: 5,
    alignContent: 'space-between',
  },
  box2conte: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  box2: {
      height: 150,
      width: 100, 
      borderBlockColor: 'black',
      borderWidth: 2,
      borderRadius:5, 
  },
  box3conte: {
    flexDirection: 'row',
    padding: 10,
  },
  box3: {
      height: 55,
      width: 330, 
      borderBlockColor: 'black',
      borderWidth: 2,
      borderRadius:5, 
  },
  box4conte: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flex:2,
  },
  box4: {
      height: 100,
      width: 100, 
      borderBlockColor: 'black',
      borderWidth: 2,
      borderRadius:5, 
  },
  box5conte: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flex:2,
  },
  box5: {
      height: 100,
      width: 100, 
      borderBlockColor: 'black',
      borderWidth: 2,
      borderRadius:5, 
  },
    
});

