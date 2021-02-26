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

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let imc = this.state.massa / (this.state.altura * this.state.altura)
    //alterar state

    let s = this.state
    s.resultado = imc

    if(s.resultado<16) {
      s.resultadoText = "Magreza";
    }else if(s.resultado < 25){
      s.resultadoText = "Normal";
    }else if(s.resultado < 45){
      s.resultadoText = "Gordo 1";
    }else if (s.resultado < 60){
      s.resultadoText = "Goordo 2";
    }else{
      s.resultadoText = "Ta fudido";
    }



    this.setState(s)
  }



  render(){
    return(

      <View style={styles.container}>

        <View style={styles.entrada}>
        
        <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}} />
        
        </View>

          <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
          <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
          <Text style={[styles.resultado, {fontSize:35}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
   
    backgroundColor: '#F0FFFF',
  
  },
entrada:{
  flexDirection: 'row'
},
  input:{
    height: 80,
    textAlign: 'center',
    width: "50%",
    fontSize:50,
    marginTop: 24,
  },
  button:{
    backgroundColor: '#87CEFA',
  },
  buttonText:{
    alignSelf:'center',
    padding: 30,
    fontSize:25,
    color:"#0000EE",
    fontWeight: 'bold'
  },
  resultado:{
    alignSelf: 'center',
    color:'lightgray',
    fontSize:65,
    padding:15
  }
});




export default Imc;