import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SpecCard from './components/SpecCard';

export default function App() {
  return (
    <LinearGradient colors={['#8ec5fc', '#e0c3fc']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>GPU Spec Sheet</Text>
        <Text style={styles.subheader}>NVIDIA GeForce RTX 4070 Super</Text>

        <SpecCard emoji="🏭" title="Brand" value="NVIDIA" bgColor="#22c55e" />
        <SpecCard emoji="🎮" title="Model" value="RTX 4070 Super" bgColor="#38bdf8" />
        <SpecCard emoji="💾" title="VRAM" value="12GB GDDR6X" bgColor="#2dd4bf" />
        <SpecCard emoji="⚡" title="Boost Clock" value="2.48 GHz" bgColor="#a78bfa" />
        <SpecCard emoji="🔥" title="TDP" value="220W" bgColor="#fbbf24" />
        <SpecCard emoji="🔌" title="Bus Width" value="192-bit" bgColor="#f472b6" />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    textShadowColor: 'rgba(255,255,255,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subheader: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 20,
    marginTop: 4,
  },
});