import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';

const spotReview = [
  { id: '1', reviewer: 'Ana T.', rating: 5, profileImage: '👩🏼', review: 'My go-to study space. Has everything you need to study.' },
  { id: '2', reviewer: 'Jake S.', rating: 4, profileImage: '👨🏼' ,review: 'Best place for collaborating with your team.'  },
  { id: '3', reviewer: 'Sarah L.', rating: 3, profileImage: '👩🏾', review: 'A bit crowded on morning yet spacious.' },
];

export default function StudySpotScreen({ route }) {
  const { spot } = route.params;

  const getStarts = (rate) => {
    let rating = []
    for(let r = 0; r < rate; r++) {
      rating.push("⭐")
      console.log(r)
    }
    return rating
  }

  const showReviewForm = () => {

  }

  return (
    <View style={styles.container}>
      <Image source={spot.image} style={styles.image} />
      <View style={styles.spotInfoContainer}>
        <Text style={styles.spotName}>{spot.name}</Text>
        <Text style={styles.spotRating}>⭐ {spot.rating}</Text>
      </View>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text>A spacious and quiet place with plenty seating and power outlets.(Dummy Text)</Text>
      <Text style={styles.reviewTitle}>Top Reviews</Text>
      <FlatList
        data={spotReview}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <>
          <View style={styles.reviewer}>
            <Text style={styles.profileImage}>{item.profileImage}</Text>
            <View>
              <Text>{item.reviewer}</Text>
              <Text>{getStarts(item.rating)}</Text>
            </View>
          </View>
          <Text>{item.review}</Text>
        </>
        )}
      />
      <TouchableOpacity 
        onPress={showReviewForm()}
        style={styles.reviewButton}
      >
        <Text style={styles.buttonText}>WRITE A REVIEW</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    borderRadius: 12,
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
    borderRadius: 8,
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
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }, 
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  reviewer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  profileImage: {
    fontSize: 25,
  },
  reviewButton: {
    borderRadius: 10,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500'
  },
});
  