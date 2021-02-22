import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, Button, TextInput, Animated, KeyboardAvoidingView, TouchableOpacity } from 'react-native';



export default function feddback(){
  return (
    <SafeAreaView>
      <View style = {styles.header}>
      <Text style = {styles.saudacao1} Text style ={{color:'#AC8F8F', fontSize:15}}>Boa tarde</Text>
      <Text style = {styles.saudacao2} Text style ={{color:'#AC8F8F', fontSize:18, fontWeight:'bold'}}>Beatriz Japa</Text>
        <Image
        source={require('../../assets/avatar1.png')}
        style={{width: 50, height:50, marginRight:15}}
        resizeMode="contain"
        />
        </View>
      
        <TouchableOpacity style={styles.btnMenu}>
         <Text style={styles.registerText}>Contas</Text>
         <Text style={styles.registerText}>Saiba Mais</Text>
         </TouchableOpacity>

         <View style = {styles.saudacao3}>
        <Text style ={{color:'#AC8F8F', fontSize:25, fontWeight:'bold'}}>Deixe aqui sugestões ou reclamações para podermos melhorar nossa plataforma</Text>
         </View>

        <TextInput style={{
          height:200,
          margin:20,
          padding:10,
          borderColor:'#40B63E',
          borderWidth:2,
          marginTop:50,
          textAlign: 'auto',
          
        }}
        multiline={true}
        editable={true}
        borderBottomWidth={3}

        />
    
    
    
    <TouchableOpacity style={styles.btnSubmit}>
      <Text style={styles.submitText} Text style ={{color:'#FFF', fontSize:22, fontWeight:'bold'}}>Enviar</Text>
    </TouchableOpacity>

    <View style = {styles.footer1}/>

    <SafeAreaView>
    <View style = {styles.footer}>
    <Image
        source={require('../../assets/Home.png')}
        style={{width: 30, height:30, marginRight:15}}
        resizeMode="contain"
        />

    <Image
        source={require('../../assets/game.png')}
        style={{width: 30, height:30, marginRight:15}}
        resizeMode="contain"
        />

    <Image
        source={require('../../assets/Vector.png')}
        style={{width: 30, height:30, marginRight:15}}
        resizeMode="contain"
        />
    </View>
    </SafeAreaView>
      
    </SafeAreaView>
  
 
);

}


const styles = StyleSheet.create({
  header:{
    backgroundColor:'#FFF',
    marginTop:40,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:10,
    paddingLeft:10,
    borderBottomWidth: 3,
    borderColor:'#9AE06F',
   
  },

  input:{
    backgroundColor:'#40B63E',
    marginTop: 100,
    width: '90%',
    height:50,
    marginBottom:115,
    color: '#222',
    fontSize: 17,
    borderRadius:7,
    padding:10,
  },

  btnSubmit:{
    backgroundColor:'#40B63E',
    width: 150,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
    marginHorizontal:'32%',
    marginTop:20,
   

  },

  btnMenu:{
    
    marginTop:40,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:230,
    paddingLeft:20,
    marginTop: 10,
  },

  saudacao3: {
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:40,
    paddingRight:10,
    marginTop: 120,
    paddingLeft:10,
  },

  footer1:{
   backgroundColor: '#778899',
   width:'90%',
   height:3,
   marginLeft:18,
   marginTop: 100,
  },

  footer:{
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:20,
    paddingLeft:20,
    marginTop:5,
  }
});
          
 

