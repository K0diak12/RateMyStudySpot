import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const studySpots = [
  { id: '1', name: 'Mary & John Gray Library', rating: 4.2, image: require('../assets/LUlibrary.jpg') },
  { id: '2', name: 'STEM Building', rating: 4.5, image: require('../assets/STEM.avif') },
  { id: '3', name: 'MAES Building', rating: 4.3, image: require('../assets/LUmaes.jpg') },
  { id: '4', name: 'Starbucks LU', rating: 3.6, image: require('../assets/StudBucks.jpg') },


];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Study Spots near me </Text>
      
      <FlatList
        data={studySpots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.spotContainer} 
            onPress={() => navigation.navigate('StudySpot', { spot: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.spotName}>{item.name}</Text>
            <Text style={styles.spotRating}>⭐ {item.rating} / 5</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  spotContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 190,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  spotName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  spotRating: {
    fontSize: 14,
    color: '#555',
  },
});
  
