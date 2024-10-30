import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const QuestionScreen = ({ route }) => {

    // Get the category from the route parameters
    const { category } = route.params;


    const sampleQuestions = [
        {
            question: 'What is the capital of France?',
            difficulty: 'Medium',
            options: [
                { id: '1', text: 'Berlin', isCorrect: false },
                { id: '2', text: 'Madrid', isCorrect: false },
                { id: '3', text: 'Paris', isCorrect: true },
                { id: '4', text: 'Rome', isCorrect: false }
            ]
        },
        {
            question: 'What is 2 + 2?',
            difficulty: 'Easy',
            options: [
                { id: '1', text: '3', isCorrect: false },
                { id: '2', text: '4', isCorrect: true },
                { id: '3', text: '5', isCorrect: false },
                { id: '4', text: '6', isCorrect: false }
            ]
        },
        {
            question: 'Which planet is known as the Red Planet?',
            difficulty: 'Medium',
            options: [
                { id: '1', text: 'Earth', isCorrect: false },
                { id: '2', text: 'Mars', isCorrect: true },
                { id: '3', text: 'Jupiter', isCorrect: false },
                { id: '4', text: 'Saturn', isCorrect: false }
            ]
        }
    ];


    const [questionIndex, setQuestionIndex] = useState(0);
    const sampleQuestion = sampleQuestions[questionIndex];

    // State to track selected answer and correct/wrong status
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleOptionPress = (option) => {
        setSelectedOption(option.id);
        setIsAnswerCorrect(option.isCorrect);
    };

    // const handleNextQuestion = () => {
    //     // Move to the next question and reset the states
    //     if (questionIndex < sampleQuestions.length - 1) {
    //         setQuestionIndex(questionIndex + 1);
    //         setSelectedOption(null);
    //         setIsAnswerCorrect(null);
    //     }
    // };
    const handleNextQuestion = () => {
        if (questionIndex < sampleQuestions.length - 1) {
            setQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption(null);
            setIsAnswerCorrect(null);
        }
    };

    const handleBackPress = () => {
        questionIndex > 0 ? setQuestionIndex(questionIndex - 1) : console.log('No more questions');
    }


    return (
            <View style={styles.container} key={questionIndex}>
                {/* Category and Difficulty level on top left */}
                <View style={styles.topBar}>
                    <FontAwesome name='arrow-left' size={25} style={{marginBottom: 10}} onPress={handleBackPress}/>

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
                        const showCorrect = isAnswerCorrect !== null && option.isCorrect;

                        return (
                            <TouchableOpacity
                                key={option.id}
                                style={[
                                    styles.optionButton,
                                    isSelected && (isCorrect ? styles.correctAnswer : styles.wrongAnswer),
                                    showCorrect && styles.correctAnswer
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
                                {showCorrect && (
                                    <Text style={styles.correctAnswerText}>Correct Answer!</Text>
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Display message for correct answer */}
                {isAnswerCorrect && (
                    <Text style={styles.goodJobText}>Good Job!</Text>
                )}

                {/* Display Next Question button if an answer is selected */}
                {isAnswerCorrect !== null && (
                    <View style={styles.nextButtonContainer}>
                        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
                            <Text style={styles.nextButtonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                )}
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
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black',
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
    correctAnswerText: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        fontSize: 12,
        color: '#fff',
        fontStyle: 'italic',
    },
    goodJobText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginVertical: 20,
    },
    nextButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    nextButton: {
        width: 100,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default QuestionScreen;