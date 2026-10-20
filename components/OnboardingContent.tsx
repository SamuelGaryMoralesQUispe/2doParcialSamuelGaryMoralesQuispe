import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface OnboardingContentProps {
  onPressStart?: () => void;
}

export default function OnboardingContent({ onPressStart }: OnboardingContentProps) {
  return (
    <View style={styles.container}>
      {/* Título principal en blanco */}
      <Text style={styles.title}>
        Jump start your{'\n'}crypto portfolio
      </Text>

      {/* Subtítulo descriptivo en gris */}
      <Text style={styles.subtitle}>
        Take your investment portfolio{'\n'}to next level
      </Text>

      {/* Botón principal redondeado violeta */}
      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.85}
        onPress={onPressStart}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 'auto',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 38,
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#5B4DFF',
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#5B4DFF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});