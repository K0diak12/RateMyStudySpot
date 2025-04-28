aimport React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>👤 Profile Page</Text>
           <Text>This is where user information will go.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom: 10, 
    },
});
