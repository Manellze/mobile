import React from 'react';
import { StyleSheet, Text, View , } from 'react-native';
import Viewer from './components/Viewer'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ADolarS</Text>
      <Text style={styles.texto}>Valor do Real em outro Lugares:</Text>
      <Viewer title="EUA(dolar)"type="USD-BRL"/>
      <Viewer title="Europa(euro)"type="EUR-BRL"/>
      <Viewer title="Japão(Iene)"type="JPY-BRL"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
      color: '#FF5733',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '35px',
    },
    texto: {
      color: '#000',
      fontSize: '35px',
      margin:'40px',
    },
});
