import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Button } from 'react-native-paper';

export default function Inicio({navigation}) {
  return (
    <> 
    <ScrollView> 
    <View >  
      <Card style={styles.container}>
        <View style={styles.divisao}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Image style={styles.img} source={require('../assets/padaria.jpg')} />
          <Image style={styles.imgseq} source={require('../assets/itensDecoracao.png')} />

          <Button color="#763C00"
            title="Produtos"
            style={styles.button}
            onPress={() => navigation.navigate('Cardapio')}
          > 
          Produtos 
          </Button>
        </View>
      </Card> 
    </View>  
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: -50,
    backgroundColor: '#FBEBD3',
    border: 1
  },
  divisao: {
    padding: 8,
    borderRadius: 40
  },
  logo: {
    marginTop: -50,
    marginBottom: 5,
    alignContent: 'center',
    height: 210,
    width: 220, 
  },
  img: {
    marginTop: -40,
    marginBottom: 10,
    alignContent: 'center',
    height: 135,
    width: 250, 
  },
  imgseq: {
    marginTop: -8,
    marginBottom: 3,
    alignContent: 'center',
    height: 70,
    width: 250, 
  },
  button: {
    backgroundColor: 'white', 
    padding: 6,
    contentAlign: 'center',
    fontFamily: 'Adamina',
    marginBottom: 13,
    border: 2,
    borderColor: '#763C00',
  }
});