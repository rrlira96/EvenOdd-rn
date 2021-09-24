import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


function EvenOdd() {
  const [count, setCount] = useState(0);

  return(
    <View style={styles.container}>
      <Button title={count % 2 == 0 ? "PAR" : "ÍMPAR"} onPress={() => setCount(count + 1)} color='red' />
      <Text>{count}</Text>
    </View>
  )
}

export default function App() {
  return <EvenOdd />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
