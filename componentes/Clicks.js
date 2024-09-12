import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Click = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.clickButton} onPress={onPress}>
      <Text style={styles.buttonText}>Clic</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clickButton: {
    backgroundColor: '#0000FF',
    padding: 10,
    marginVertical: 10,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Click;
