import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Click from './componentes/Clicks'; // Cambiado de './componentes/Click' a './componentes/Clicks'
import Reiniciar from './componentes/Reiniciar';

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image source={require('./assets/logofreeCode.png')} style={styles.logo} />
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{count}</Text>
      </View>
      <Click onPress={handleIncrement} />
      <Reiniciar onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1C31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 38,
  },
  counterBox: {
    borderWidth: 2,
    borderColor: '#fff',
    height: 170,
    width: 170,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
