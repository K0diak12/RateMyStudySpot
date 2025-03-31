import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function StudySpotScreen({ route }) {
  const { spot } = route.params;
  return (
    <View style={styles.container}>
      <Image source={spot.image} style={styles.image} />
      <View style={styles.spotInfoContainer}>
        <Text style={styles.spotName}>{spot.name}</Text>
        <Text style={styles.spotRating}>⭐ {spot.rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 175,
    borderRadius: 10,
    marginBottom: 10,
  },
  spotInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  spotName: {
    fontSize: 24,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  spotRating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    backgroundColor: '#fffbe3',
    padding: 5,
    borderRadius: 10,
  },
});
  