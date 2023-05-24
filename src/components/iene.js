import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import axios from 'axios';

const CotacaoIene = () => {
  const [cotacao, setCotacao] = useState(null);

  useEffect(() => {
    const getCotacao = async () => {
      const response = await axios.get('https://economia.awesomeapi.com.br/json/daily/JPY-BRL');
      setCotacao(response.data[0].bid);
    };

    getCotacao();
  }, []);

  if (!cotacao) {
    return null;
  }



  return (
    <View>
      <Text style={styles.texto}>Japão (Iene)</Text>
      <Text style={styles.cotacao}>R$ {cotacao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    texto: {
      color: '#000',
      fontSize: '35px',
      margin:'40px',
    },
    titulo: {
        color: '#FF5733',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '35px',
      },
      cotacao: {
        color: '#fff',
        backgroundColor: '#ff5733',
        fontSize: '30px',
        display: 'flex',
        alignSelf: 'center',
        borderRadius: '10px',
        padding: '10px',
      },
  });
export default CotacaoIene;
