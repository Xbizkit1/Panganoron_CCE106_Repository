import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SpecCard(props) {
  return (
    <View style={styles.shadowWrapper}>
      <LinearGradient
        colors={[props.bgColor, shadeColor(props.bgColor, -25)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.glossHighlight} />
        <View style={styles.bubble1} />
        <View style={styles.bubble2} />

        <View style={styles.titleRow}>
          {props.emoji ? <Text style={styles.emoji}>{props.emoji}</Text> : null}
          <Text style={styles.title}>{props.title}</Text>
        </View>

        <Text style={styles.value}>{props.value}</Text>
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
    alignItems: 'center',
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
  bubble2: {
    position: 'absolute',
    bottom: 25,
    right: 35,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 16,
    marginRight: 6,
  },
  title: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.92)',
    fontWeight: '500',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  value: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
});