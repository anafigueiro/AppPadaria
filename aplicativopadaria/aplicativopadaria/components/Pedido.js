import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import firebase from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Padaria from './Padaria';
import Cardapio from './Cardapio';
import { TextInput, Button, Card } from 'react-native-paper';
import {database} from './firebase';

export default function Pedido({ navigation }) {
  
  const [nome, setNome] = React.useState('');
  const [valor, setValor] = React.useState('');
  const [descricao, setDescricao] = React.useState('');

  const salvar = () => {
    //alert("Salvo");
    var bd = database.ref('padaria/');

    bd.push({ nome: nome, valor: valor, descricao: descricao })
      .then(() => {
        console.log('Inserido com sucesso');
      })
      .catch((error) => console.log(error));

      navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
      <TextInput style= {styles.input}
        label="Nome do produto"
        value={nome}
        onChangeText={(item) => setNome(item)}
      />
      <TextInput style= {styles.input}
        label="Valor do produto"
        value={valor}
        onChangeText={(item) => setValor(item)}
      />
      <TextInput style= {styles.input}
        label="Descrição"
        value={descricao}
        onChangeText={(item) => setDescricao(item)}
      />
      <Button 
        style={styles.button}
        mode="contained"  
        onPress={() => salvar()}> 
        Cadastrar Produto
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFAF3',
    padding: 5,
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#F5D9AF', 
    color: '#763C00',
    padding: 5,
    fontFamily: 'Adamina',
    marginTop: 10,
    marginBottom: 41,
    marginLeft: 80,
    marginRight: 10,
    width: 228,
    borderRadius: 0,
  },
  input: {
    backgroundColor: '#FBEBD3',
    padding: 2,
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
    fontFamily: 'Adamina',
    color: '#763C00',
    fontSize: 15,
    height: 60,
  }
});