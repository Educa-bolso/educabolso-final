import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';



import perfil from './src/Paginas/perfil';
import feedback from './src/Paginas/feedback';
import referencias from './src/Paginas/referencias';
import home from './src/Paginas/home';


function CustomDrawer({...props}){
  return(
    <View style={styles.container}>
      <View style={styles.userArea}>
      <image
      source={require('./assets/avatar1.png')}
      style={styles.user}
      />
      <Text style={styles.nome}>Bem Vindo Beatriz</Text>
      <Text style={styles.email}>beatriz@educabolso.com.br</Text>
      </View>
      < DrawerNavigatorItems{...props}/>
      </View>
  );
}



function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Fechar"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Missão"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={home} />
      <Drawer.Screen name="Perfil" component={perfil} />
      <Drawer.Screen name="Feedback" component={feedback} />
      <Drawer.Screen name="Parceiros" component={referencias} />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

