import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, Button, TextInput, Animated, KeyboardAvoidingView, TouchableOpacity } from 'react-native';



export default function home(){
  return (
    <SafeAreaView>
      <View style = {styles.header}>
      <Text style = {styles.saudacao1} Text style ={{color:'#AC8F8F', fontSize:15}}>Ola!!!</Text>
      <Text style = {styles.saudacao2} Text style ={{color:'#AC8F8F', fontSize:18, fontWeight:'bold'}}>Bem vindo ao EducaBolso</Text>
        <Image
        source={require('../../assets/avatar1.png')}
        style={{width: 50, height:50, marginRight:15}}
        resizeMode="contain"
        />
        </View>
      
      <SafeAreaView style = {styles.EducaBolso}>
      <Image 
        source={require('../../assets/Gif_Menor.gif')}
        style={{width: 250, height:250, marginRight:15}}
        resizeMode="contain"
        />
      </SafeAreaView>
        
             
    
    
    
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
  },

  EducaBolso:{
    marginLeft:80,
    marginTop:200,
    marginBottom:110,
  }
});
          
 

