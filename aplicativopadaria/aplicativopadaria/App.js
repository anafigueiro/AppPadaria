import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

// You can import from local files
import Cardapio from './components/Cardapio';
import Inicio from './components/Inicio';
import Pedido from './components/Pedido';
import Perfil from './components/Perfil';
import Promo from './components/Promo';

const InicioStack = createNativeStackNavigator();

function InicioStackScreen() {
  return ( 
      <InicioStack.Navigator>
        <InicioStack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'Inicio: ' }}
        />
      </InicioStack.Navigator>);
}

const CardapioStack = createNativeStackNavigator();

function CardapioStackScreen() {
  return ( 
      <CardapioStack.Navigator>
        <CardapioStack.Screen
          name="Inicio"
          component={Cardapio}
          options={{ title: 'Cardápio: ' }}
        />
        <CardapioStack.Screen
          name="Pedido"
          component={Pedido}
          options={{ title: 'Produto: ' }}
        />
      </CardapioStack.Navigator>);
}

const PromoStack = createNativeStackNavigator();

function PromoStackScreen() {
  return ( 
      <PromoStack.Navigator>
        <PromoStack.Screen
          name="Promo"
          component={Promo}
          options={{ title: 'Receitas: ' }}
        />
      </PromoStack.Navigator>);
}

const PerfilStack = createNativeStackNavigator();

function PerfilStackScreen() {
  return ( 
      <PerfilStack.Navigator>
        <PerfilStack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: 'Perfil: ' }}
        />
      </PerfilStack.Navigator>);
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen 
            name="Inicio" 
            component={InicioStackScreen} 
            options={{
              tabBarLabel: "Início", 
              tabBarIcon: ({color})=> (
              <Icon name="home" color= {'#763C00'} size= {23}/>
              ),
            }}
          />  
          <Tab.Screen 
            name="Cardapio" 
            component={CardapioStackScreen} 
            options={{
              tabBarLabel: "Cardapio", 
              tabBarIcon: ({color})=> (
              <Icon name="clipboard" color= {'#763C00'} size= {23}/>
              ),
            }}
          /> 
          <Tab.Screen 
            name="Promoções" 
            component={PromoStackScreen} 
            options={{
              tabBarLabel: "Receitas", 
              tabBarIcon: ({color})=> (
              <Icon name="user" color= {'#763C00'} size= {23}/>
              ),
            }}
          /> 
          <Tab.Screen 
            name="Perfil" 
            component={PerfilStackScreen} 
            options={{
              tabBarLabel: "Perfil", 
              tabBarIcon: ({color})=> (
              <Icon name="user" color= {'#763C00'} size= {23}/>
              ),
            }}
          />          
      </Tab.Navigator>
    </NavigationContainer>  
  );
}

