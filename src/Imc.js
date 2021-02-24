import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';



class Imc extends Component{
  render(){
    return(
      <View style={styles.container}>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input}/>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input}/>
          <TouchableOpacity style={styles.button} onPress={()=>{}}><Text>Calcular</Text></TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#C0C0C0',
  
  },

  input:{
    height: 80,
    textAlign: 'center',
    width: "50%",
    fontSize:50,
    marginTop: 24,
  }
});




export default Imc;