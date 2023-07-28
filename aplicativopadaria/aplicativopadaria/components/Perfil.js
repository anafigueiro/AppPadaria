import * as React from 'react';
import { Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import { FAB, Card, Button} from 'react-native-paper';

export default function Perfil({navigation}) {
  return (
    <> 
    <ScrollView> 
    <View>

      <Card style={styles.container}>
 
      <Image style={styles.img} source={require('../assets/profile.png')} />
      <Text style={styles.nome}> Ana Vitória e Maria Luísa </Text>

      <Text style={styles.paragraph}> Nome </Text>
      <View style={styles.divisao}> 
        <Text style={styles.resposta}> Ana Vitória </Text>
      </View>
      
      <Text style={styles.paragraph}> Login </Text>
      <View style={styles.divisao}>
        <Text style={styles.resposta}> Maria Luisa </Text>
      </View>

      <Text style={styles.paragraph}> Telefone </Text>  
      <View style={styles.divisao}>   
        <Text style={styles.resposta}> (49) 98899 8899 </Text>
      </View>
      
      <Text style={styles.paragraph}> Endereço </Text>
      <View style={styles.divisao}>
        <Text style={styles.resposta}> Chapecó- Centro </Text>
      </View>

       <Button color="#763C00"
          title="Ver Cardapio"
          style={styles.button}
          onPress={() => navigation.navigate('Cardapio')}
        > Ver Cardápio </Button>

      </Card>     
    </View>  
    </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FEFAF3',
    border: 1,
  },
  divisao: {
    padding: 1,
    backgroundColor: '#FBEBD3',
    //width: 100,
    marginLeft: -12,
  },
  nome: {
    marginTop: -50,
    marginBottom: 30,
    marginLeft: 55,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Adamina',
    color: '#763C00',
  },
  paragraph: {
    marginTop: 0,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
    marginLeft: -25,
    fontFamily: 'Adamina',
    color: '#763C00',
    padding: 10
  },
  resposta: {
    marginTop: 5,
    fontSize: 14,
    marginLeft: 5,
    fontFamily: 'Adamina',
    color: '#763C00',
    padding: 4
  },
  img: {
    height: 60,
    width: 60, 
    marginLeft: -17,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 40,
  },
  button: {
    backgroundColor: '#F5D9AF', 
    padding: 2,
    fontFamily: 'Adamina',
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 100,
    borderRadius: 0,
  }
});