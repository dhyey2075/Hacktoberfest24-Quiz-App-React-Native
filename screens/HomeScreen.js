import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    // Static quiz categories
    const categories = [
        { id: '1', name: 'General Knowledge' },
        { id: '2', name: 'Science' },
        { id: '3', name: 'History' },
        { id: '4', name: 'Sports' }
    ];

    // Handle category selection
    const handleCategoryPress = (category) => {
        // navigating to question page
        navigation.navigate('Question', {category });
        // Navigation logic can be implemented later

        // navigating to question page
        navigation.navigate('Question', {category });
        console.log('Selected category:', category.name);
    };

    return (
        <View style={styles.container}>

            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.categoryButton}
                        onPress={() => handleCategoryPress(item)}
                    >
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    categoryButton: {
        backgroundColor: '#007bff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 5,
    },
    categoryText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default HomeScreen;