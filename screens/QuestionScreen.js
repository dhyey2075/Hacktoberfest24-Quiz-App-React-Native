import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const QuestionScreen = ({ route }) => {
    
    // Get the category from the route parameters
    const { category } = route.params;

    
    const sampleQuestion = {
        question: 'What is the capital of France?',
        difficulty: 'Medium',
        options: [
            { id: '1', text: 'Berlin', isCorrect: false },
            { id: '2', text: 'Madrid', isCorrect: false },
            { id: '3', text: 'Paris', isCorrect: true },
            { id: '4', text: 'Rome', isCorrect: false }
        ]
    };

    // State to track selected answer and correct/wrong status
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleOptionPress = (option) => {
        setSelectedOption(option.id);
        setIsAnswerCorrect(option.isCorrect);
    };


    return (
        <View style={styles.container}>
            {/* Category and Difficulty level on top left */}
            <View style={styles.topBar}>
                <Text style={styles.categoryText}>Category: {category.name}</Text>
                <Text style={styles.difficultyText}>Difficulty: {sampleQuestion.difficulty}</Text>
            </View>

            {/* Question in the center */}
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{sampleQuestion.question}</Text>
            </View>

             {/* Options */}
             <View style={styles.optionsContainer}>
                {sampleQuestion.options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    const isCorrect = isAnswerCorrect !== null && option.isCorrect;

                    return (
                        <TouchableOpacity
                            key={option.id}
                            style={[
                                styles.optionButton,
                                isSelected && (isCorrect ? styles.correctAnswer : styles.wrongAnswer)
                            ]}
                            onPress={() => handleOptionPress(option)}
                            disabled={isAnswerCorrect !== null} 
                        >   
                            <Text style={styles.optionText}>{option.text}</Text>
                            {isSelected && isCorrect && (
                                <MaterialIcons name="check-circle" size={24} color="green" />
                            )}
                            {isSelected && !isCorrect && (
                                <MaterialIcons name="cancel" size={24} color="red" />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>

            <Text style={styles.title}>Category: {category.name}</Text>
            {/* Further quiz content goes here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    categoryText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    difficultyText: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#888',
    },
    questionContainer: {
        marginVertical: 40,
        alignItems: 'center',
    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    optionsContainer: {
        marginTop: 20,
    },
    optionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#007bff',
    },
    optionText: {
        color: '#fff',
        fontSize: 18,
    },
    correctAnswer: {
        backgroundColor: 'green',
    },
    wrongAnswer: {
        backgroundColor: 'red',
    },
});

export default QuestionScreen;