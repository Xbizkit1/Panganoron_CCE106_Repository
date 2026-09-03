import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SpecCard(props) {
  return (
    <View style={styles.shadowWrapper}>
      <LinearGradient
        colors={[props.bgColor, shadeColor(props.bgColor, -30)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.glossHighlight} />
        <View style={styles.bubble1} />

        <Text style={styles.brand}>{props.brand}</Text>
        <Text style={styles.model}>{props.model}</Text>

        <View style={styles.divider} />

        {props.specs.map((spec, i) => (
          <View key={i} style={styles.specRow}>
            <Text style={styles.specLabel}>{spec.label}</Text>
            <Text style={styles.specValue}>{spec.value}</Text>
          </View>
        ))}
      </LinearGradient>
    </View>
  );
}

function shadeColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  let r = (num >> 16) + percent;
  let g = ((num >> 8) & 0x00ff) + percent;
  let b = (num & 0x0000ff) + percent;
  r = Math.max(Math.min(255, r), 0);
  g = Math.max(Math.min(255, g), 0);
  b = Math.max(Math.min(255, b), 0);
  return '#' + (g | (r << 8) | (b << 16)).toString(16).padStart(6, '0');
}

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: 22,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 10,
  },
  card: {
    borderRadius: 22,
    padding: 22,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  glossHighlight: {
    position: 'absolute',
    top: -30,
    left: -20,
    width: '140%',
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderRadius: 100,
    transform: [{ rotate: '-8deg' }],
  },
  bubble1: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  brand: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  model: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 2,
    marginBottom: 12,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.35)',
    marginBottom: 10,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  specLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  specValue: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
});