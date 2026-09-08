import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const handleWin = () => {
    setCount(count + 5);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={handleWin} activeOpacity={0.7}>
        <View style={styles.buttonShine} />
        <Text style={styles.buttonText}>Press to add 5</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf6fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1b3a4b',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#109fca',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ffffff',
    shadowColor: '#1a7391',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  buttonShine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(255,255,255,0.45)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    textShadowColor: 'rgba(0,80,120,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});