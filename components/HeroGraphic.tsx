import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function HeroGraphic() {
  return (
    <View style={styles.container}>
      {/* Marco decorativo sutil con borde */}
      <View style={styles.frameBorder} />

      {/* Imagen abstracta 3D de la flor/espiral violeta */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
        }}
        style={styles.image}
        resizeMode="contain"
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
  },
  frameBorder: {
    position: 'absolute',
    width: '88%',
    height: '92%',
    borderWidth: 1.5,
    borderColor: 'rgba(167, 139, 250, 0.28)',
    borderRadius: 12,
  },
  image: {
    width: '85%',
    height: '85%',
  },
});