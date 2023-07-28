import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function Padaria(props) {
  return (
    <View style={styles.container}>
    <Image style={styles.img} source={require('../assets/padaria.jpg')} />
    <Text style={styles.paragraph}> {props.nome} </Text>
    <Text style={styles.valor}> {props.valor} </Text>
    <Text style={styles.valor}> {props.descricao} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#FBEBD3',
    borderRadius: 10
  },
  paragraph: {
    marginTop: -80,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 15,
    marginLeft: 120,
    marginBottom: 1,
    fontFamily: 'Adamina',
    color: '#763C00',
    padding: 1,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 15,
    marginLeft: 120,
    marginBottom: 4,
    fontFamily: 'Adamina',
    color: '#763C00',
    padding: 1,
  },
  img: {
    marginBottom: 15,
    marginTop: 10,
    alignContent: 'left',
    height: 70,
    width: 80, 
    marginLeft: 10,
  },
});