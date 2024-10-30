import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';

export default function QuizCategoryScreen() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = 'https://trivia-questions-api.p.rapidapi.com/fetchCategories';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a69d3154dbmshf3f21bbe9384c04p1d7031jsn9ff9cc71c3cb',
            'x-rapidapi-host': 'trivia-questions-api.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                
                // Log the structure to ensure we are setting `categories` correctly

                // Assuming `data` is the array we need
                if (Array.isArray(data.triviaCategories)) {
                    setCategories(data.triviaCategories);
                } else {
                    setCategories([]);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
                setCategories([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Quiz Categories</Text>
            {categories.length > 0 ? (
                <FlatList
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item, index) => item.id || index.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.categoryList}
                />
            ) : (
                <Text style={styles.noCategories}>Error fetching categories. Please try again later</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
        color: '#333',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    categoryList: {
        paddingHorizontal: 8,
    },
    categoryCard: {
        flex: 1,
        margin: 8,
        padding: 16,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 5,
    },
    categoryText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
    noCategories: {
        fontSize: 18,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },
});
