import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* Home Screen */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Quiz Categories' }}
                />
                {/* QuestionScreen */}
                <Stack.Screen 
                    name="Question" 
                    component={QuestionScreen}
                    options={{title: 'take the quiz'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator
