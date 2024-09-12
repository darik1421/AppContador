import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Reiniciar = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={onPress}>
      <Text style={styles.buttonText}>Reiniciar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: '#008000',
    padding: 10,
    marginVertical: 0,
    width: 150,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Reiniciar;