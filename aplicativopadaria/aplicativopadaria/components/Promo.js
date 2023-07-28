import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import { Card, FAB, Title, Paragraph } from 'react-native-paper';

export default Promo = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const resp = await fetch('https://api.sampleapis.com/recipes/recipes');
    const data = await resp.json();
    setData(data);
    setCarregando(false);
  };
  const renderItem = ({ item }) => {

    return (
      <Card style={styles.card}>
      <Card.Title 
      title={item.title} 
      subtitle={item.cuisine}
      />
      <Card.Content>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
    </Card>
    );
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {carregando && <Text>Carregando...</Text>}
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFAF3',
    padding: 20,
  },
  fab: {
    position: 'fixed',
    margin: 16,
    right: 0,
    bottom: 50,
    backgroundColor: '#F5D9AF',
  },
  card:{
    margin: 5,
  }

});