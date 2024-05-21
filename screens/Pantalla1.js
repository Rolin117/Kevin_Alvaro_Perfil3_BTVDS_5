import React from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

export default function Pantalla1({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Integrantes</Text>
      <Card containerStyle={styles.card}>
        <Card.Title>Kevin Gerardo Nuñez Rolin</Card.Title>
        <Text style={styles.Codigo}>20220137</Text>
        <Card.Divider />
        <Image
          style={styles.image}
          source={require('../img/Kev.jpeg')}
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>Alvaro Alexander Regalado Monterrosa</Card.Title>
        <Text style={styles.Codigo}>20220686</Text>
        <Card.Divider />
        <Image
          style={styles.image}
          source={require('../img/Alvaro.jpeg')}
        />
      </Card>

      <View style={styles.buttonContainer}>
        <Button
         style={styles.botonC}
          title="Comidas"
          onPress={() => navigation.navigate('Pantalla2')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  botonC: {
    width: '100%',
    backgroundColor: '#3B9000',
  },
  Codigo: {
    textAlign: 'center',
  },
});
