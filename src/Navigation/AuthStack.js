import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../AuthScreens/OnBoardingScreen';
import RegisterScreen from '../AuthScreens/RegisterScreen';
import LoginScreen from '../AuthScreens/LoginScreen';
import ForgotPasswordScreen from '../AuthScreens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
      </Stack.Navigator>
  );
};

export default AuthStack;
