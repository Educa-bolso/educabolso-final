import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';

export default function login(){
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
        source={require('../../assets/logo.png')}
        />
      </View>

      <Animated.View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={() =>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={() =>{}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#7159C1'

  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
    
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50
  },

  input:{
    backgroundColor:'#FFF',
    width: '90%',
    height:50,
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderRadius:7,
    padding:10,
  },

  btnSubmit:{
    backgroundColor:'#35AAFF',
    width:'90%',
    height: 45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
  },

  submitText:{
    color: '#FFF',
    fontSize:18
  },

  btnRegister:{
    marginTop: 10,
  },

  registerText:{
    color: '#FFF',
    
  }  
});