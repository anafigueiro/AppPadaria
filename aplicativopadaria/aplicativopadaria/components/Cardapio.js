import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FAB, Card } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

import Padaria from './Padaria'
import firebase from './firebase';

export default function Cardapio({navigation}) {

    const [padaria, setPadaria] = React.useState([]);

    useEffect(()=> {
      load();
    });

    const load= () => { 
      var bd= firebase.database().ref("padaria/");
      var tempVetor= [];
      bd.on('value', (snapshot)=> {
        if(snapshot){
        snapshot.forEach((child)=> {
          tempVetor.push({
            nome: child.val().nome,
            valor: child.val().valor,
            descricao: child.val().descricao,
            });
         });
        }
      });
      setPadaria(tempVetor);
    }; 

    return (

    <>
    <ScrollView> 

    <View style={styles.container}>
      {padaria.map((item) => {
        return (
          <View>
            <Card style={styles.divisao}>
              <Padaria
                nome={item.nome}
                valor={item.valor}
                descricao={item.descricao}
                imgProduto= {item.imgProduto}
              />   
            </Card>      
          </View>
        );
      })}
    </View>
    </ScrollView>
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => navigation.navigate('Pedido')}
    />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FEFAF3',
    border: 1,
    paddingTop: 10,
  },
  divisao: {
    padding: 10,
    borderRadius: 10, 
    backgroundColor: '#FBEBD3',
    width: 280,
    margin: 10,
  },
  fab: {
    position: 'fixed',
    margin: 16,
    right: 0,
    bottom: 50,
    backgroundColor: '#F5D9AF',
  },
});