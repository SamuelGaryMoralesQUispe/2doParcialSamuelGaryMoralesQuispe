import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Alert } from 'react-native';
import HeroGraphic from './components/HeroGraphic';
import OnboardingContent from './components/OnboardingContent';

export default function App() {
  const handleGetStarted = () => {
    Alert.alert('CryptX', '¡Bienvenido a CryptX!');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.phoneFrame}>
        {/* Barra superior de estado */}
        <View style={styles.statusBarRow}>
          <Text style={styles.statusTime}>09:41</Text>
          <Text style={styles.statusIcons}>📶 🔋</Text>
        </View>

        {/* Logo CryptX */}
        <View style={styles.header}>
          <Text style={styles.logoWhite}>
            Crypt<Text style={styles.logoPurple}>X</Text>
          </Text>
        </View>

        {/* Componente 1: Grafico Central 3D */}
        <HeroGraphic />

        {/* Componente 2: Textos y Boton Get Started */}
        <OnboardingContent onPressStart={handleGetStarted} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneFrame: {
    flex: 1,
    width: '100%',
    maxWidth: 410,
    backgroundColor: '#0B0B0E',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  statusBarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  statusTime: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusIcons: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  logoWhite: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -1,
  },
  logoPurple: {
    color: '#6B73FF',
  },
});