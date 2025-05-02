import { useState } from "react";
import { Modal, View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, StatusBar } from "react-native";

export default function ReviewModal ({modalVisible, setModalVisible})  {
  const [starCount, setStarCount] = useState(0);
  const [titleInput, setTitleInput] = useState('')
  const [reviewInput, setReviewInput] = useState('')

  const clearModal = () => {
    setTitleInput('')
    setReviewInput('')
    setStarCount(0)
  }
  return (
    <Modal
      animationType='slide'
      transparent={true}
      statusBarTranslucent={true}
      navigationBarTranslucent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    > 
      <View style={styles.centerViewModal}>
        <View style={styles.modal}>
          <View style={styles.reviewTitleContainer}>
            <Text style={styles.writeReview}>Write A Review</Text>
            <Pressable 
            onPress={() => setModalVisible(false)}
            hitSlop={10}  
            >
              <Text style={styles.closeModal}>✖️</Text>  
            </Pressable>
          </View>
          <Text>Review Title*</Text>
          <TextInput
            style={styles.inputTitle}
            maxLength={40}
            value={titleInput}
            onChangeText={setTitleInput}
            placeholder="What's the most important to know?"
          />
          <Text>Review*</Text>
          <TextInput
            editable
            multiline
            value={reviewInput}
            onChangeText={text => setReviewInput(text)}
            style={styles.inputReview}
            placeholder='What should other customers know?'
          />
          <Text>Rate*</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity key={star} onPress={() => setStarCount(star)}>
                <Text style={starCount >= star ? styles.filledStar : styles.emptyStar}>⭐</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity 
          style={[styles.submitButton, titleInput == '' || reviewInput == '' || starCount == 0 ? styles.clear : styles.submit]}
          onPress={clearModal}
          >
            <Text 
            style={styles.buttonText} 
            >{titleInput == '' || reviewInput == '' || starCount == 0 ? 'CLEAR' : 'SUBMIT'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centerViewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'

  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    width: '85%',
    gap: 5,
  },
  reviewTitleContainer: {
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeModal: {
  backgroundColor: 'white',
  borderRadius: 20,
  
  fontSize: 16,
  },
  writeReview: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: '#b0b0b0',
    borderRadius: 8,
  },
  inputReview:{
    borderWidth: 1,
    borderColor: '#b0b0b0',
    borderRadius: 8,
    textAlignVertical: 'top',
    height: 100,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    justifyContent: 'space-around'
  },
  filledStar: {
    fontSize: 28,
    marginHorizontal: 5,
  },
  emptyStar: {
    fontSize: 28,
    color: 'transparent',  
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 1,
    marginHorizontal: 5,
    
  },
  submitButton: {
    borderRadius: 10,
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
  clear: {
    backgroundColor: 'rgba(237, 70, 70, 1)'
  },
  submit: {
    backgroundColor: '#239cfc',
  },
})