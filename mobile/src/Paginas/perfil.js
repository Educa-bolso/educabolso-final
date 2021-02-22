import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, Button, TextInput, TouchableOpacity, Platform} from 'react-native';
import { useForm } from "react-hook-form";



export default function perfil(){


  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);


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

         <View style = {styles.perfil1}>
        <Text style ={{color:'#AC8F8F', fontSize:25, fontWeight:'bold'}}>Meu perfil</Text>
         </View>

        <SafeAreaView>
          <View style = {styles.borda1}>
          <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={() =>{}}
        />
          <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          autoCorrect={false}
          onChangeText={() =>{}}
        />
          <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={() =>{}}
        />
          <TextInput
          style={styles.input}
          placeholder="Endereço"
          autoCorrect={false}
          onChangeText={() =>{}}
        />
          <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          autoCorrect={false}
          onChangeText={() =>{}}
        />
          <TextInput
          style={styles.input}
          placeholder="Eu trabalho como"
          autoCorrect={false}
          onChangeText={() =>{}}
        />
          
          </View>
          </SafeAreaView>     
       
    
        
    
    
    <TouchableOpacity style={styles.btnSalvar}>
      <Text style={styles.submitText} Text style ={{color:'#FFF', fontSize:22, fontWeight:'bold'}}>Salvar</Text>
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
    width: '90%',
    height:50,
    marginBottom:15,
    padding:10,
    borderRadius:10,
    borderBottomColor:'#40B63E',
    borderBottomWidth:5,
    
  },

  btnSalvar:{
    backgroundColor:'#40B63E',
    width: 150,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
    marginHorizontal:'32%',
    marginTop:30,
   

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

  perfil1: {
    marginLeft:30,
    paddingRight:10,
    marginTop: 50,
    paddingLeft:10,
  },

  footer1:{
   backgroundColor: '#778899',
   width:'90%',
   height:3,
   marginLeft:18,
   marginTop: 60,
  },

  footer:{
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:20,
    paddingLeft:20,
    marginTop:5,
  },
  borda1:{
    borderBottomWidth: 3,
    borderBottomColor:'#9AE06F',
    marginLeft:30,
    marginRight:30,
    borderLeftColor:'#9AE06F',
    borderLeftWidth:3,
    borderRightColor:'#9AE06F',
    borderRightWidth:3,
    borderTopColor:'#9AE06F',
    borderTopWidth:3,
    paddingLeft:30,
    paddingLeft:30,
    marginTop:20,
    borderRadius:20,
    height:400,
    
    
    
  }
});