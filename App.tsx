import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Alert } from 'react-native';
import HeroGraphic from './components/HeroGraphic';
import OnboardingContent from './components/OnboardingContent';

export default function App() {
  const handleGetStarted = () => {
    Alert.alert('CryptX', 'Bienvenido a CryptX');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        
        {/* Cabecera Logo */}
        <View style={styles.header}>
          <Text style={styles.logoWhite}>
            Crypt<Text style={styles.logoPurple}>X</Text>
          </Text>
        </View>

        {/* Componente 1: Grafico 3D */}
        <HeroGraphic />

        {/* Componente 2: Textos y Boton */}
        <OnboardingContent onPressStart={handleGetStarted} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#0B0B0E',
  },
  container: {
    flex: 1,
    backgroundColor: '#0B0B0E',
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  logoWhite: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  logoPurple: {
    color: '#6366F1',
  },
});