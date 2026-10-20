import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function HeroGraphic() {
  return (
    <View style={styles.container}>
      {/* Marco geométrico rectangular con desborde */}
      <View style={styles.wireframeBox} />

      {/* Flor / Espiral 3D lila */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
        }}
        style={styles.flowerImage}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 380,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 10,
    overflow: 'visible',
  },
  wireframeBox: {
    position: 'absolute',
    left: 24,
    right: -20, // Se desborda hacia la derecha tal como en la imagen
    top: 10,
    bottom: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(167, 139, 250, 0.35)',
    borderRadius: 4,
    zIndex: 1,
  },
  flowerImage: {
    width: 320,
    height: 320,
    borderRadius: 160,
    zIndex: 2,
  },
});