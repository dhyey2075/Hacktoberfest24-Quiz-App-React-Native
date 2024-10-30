import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
        navigation.navigate('Question', { category });
        console.log('Selected category:', category.name);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.title}>Quiz Categories</Text>
            {/* Optional logo or image */}

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
                contentContainerStyle={styles.listContainer}
            />
            <TouchableOpacity
                style={styles.moreCategoriesButton}
                onPress={() => navigation.navigate('Category')}
            >
                <Text style={styles.moreCategoriesText}>Get More Categories</Text>
            </TouchableOpacity>
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
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    logo: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
    categoryButton: {
        backgroundColor: '#007bff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3, // For Android shadow
    },
    categoryText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    moreCategoriesButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    moreCategoriesText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default HomeScreen;
