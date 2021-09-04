import React, { useState, useCallback, useReducer } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

import Background from '../../components/Background';
import Header from '../../components/Header';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const ForgotPasswordScreen = props => {

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: ''
    },
    inputValidities: {
      email: false,
    },
    formIsValid: false
  });


  const confirmHandler = () => {
    firebase.auth().sendPasswordResetEmail(formState.inputValues.email)
    .then(() => {
      Alert.alert("We've sent a link to reset your password", 'Please check your email and follow the link')
      props.navigation.navigate('Auth')
    })
    .catch((error) => {
      Alert.alert("Try again", error.message)
  })}

  return (
    <Background>
      <Header 
        title='Forgot Password?'
        backButton={true}
        navigateBack={() => {props.navigation.navigate('Auth')}}
      />
        <View style={styles.screen}>
          <ScrollView>
            <View style={styles.content}>
              <Text style={styles.label}>Please enter your email address:</Text>
              <Text style={styles.subText}>We'll email you a link to reset your password</Text>
              <MyInput 
                placeholder='Email Address'
                id="email"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="Please enter a valid email address."
                onInputChange={inputChangeHandler}
                initialValue=""
                autoCorrect={false}
              />
              <MyButton 
                title='Confirm'
                onPress={confirmHandler}
              />
            </View>
          </ScrollView>
        </View>
    </Background>
)
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    padding: 30,
  },
  label: {
    fontFamily: 'lexend-light',
    color: 'gray',
    fontSize: 18,
    textAlign: 'left'
  },
  subText: {
    fontFamily: 'lexend-light',
    color: 'gray',
    padding: 10,
    fontSize: 15,
    textAlign: 'left'
  }
})


export default ForgotPasswordScreen
