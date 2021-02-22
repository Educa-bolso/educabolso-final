import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import login from './src/Paginas/login';
import login from './src/Paginas/perfil';
import login from './src/Paginas/feedback';
import login from './src/Paginas/referencias';
import login from './src/Paginas/home';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="perfil" component={perfil} />
      <Stack.Screen name="feedback" component={feedback} />
      <Stack.Screen name="referencias" component={referencias} />
      <Stack.Screen name="home" component={home} />
      </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}