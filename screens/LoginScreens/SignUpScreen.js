import React, { useState, useReducer, useCallback } from 'react';
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Alert, 
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage'

import MyInput from '../../components/MyInput';
import Colors from '../../constants/Colors';
import MyButton from '../../components/MyButton';
import Background from '../../components/Background'

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

const SignUpScreen = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSignup, setIsSignup] = useState(true);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });

  const saveDataToStorage = (userId) => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({
        userId: userId
      })
    );
  };

  const authHandler = async () => {
      setIsLoading(true)
      if (isSignup) {
          firebase.auth().createUserWithEmailAndPassword(
            formState.inputValues.email, 
            formState.inputValues.password
          )
          .then((result) => {
            const uid = result.user.uid;
            setIsLoading(false)
            saveDataToStorage(uid);
            props.navigation.navigate('BirthTime')
          })
          .catch((error) => {
            Alert.alert('Please check your password and email', error.message)
            setIsLoading(false)
          })
    } else {
      firebase.auth().signInWithEmailAndPassword(
        formState.inputValues.email,
        formState.inputValues.password
      )
      .then((result) => {
        const uid = result.user.uid;
        setIsLoading(false)
        saveDataToStorage(uid);
        props.navigation.navigate('StartUp')
      })
      .catch((error) => {
        Alert.alert('Please check your password and email', error.message)
        setIsLoading(false)
      });
    }
  };

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


  return (
    <KeyboardAvoidingView>
      <Background>
        <View style={styles.screen}>
          <TouchableOpacity onPress={() => {
            setIsSignup(state => !state)
          }}>
          <Text style={styles.selector}>
            {isSignup ? 'Already have an account?' : 'New to Apstro?'}
            <Text style={styles.hypText}> {isSignup ? 'Login' : 'Sign Up'}</Text>
          </Text>
          </TouchableOpacity>
          <Text style={styles.header}>{isSignup ? 'Welcome to Apstro!' : 'Login'}</Text>
          {isSignup? <Text style={styles.paragraph}>Create an account to access free birth chart readings, learn about astrology, horescopes and much more!</Text> : null }
          <View style={styles.form}>
            <ScrollView>
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
              <MyInput 
                id="password"
                value="password"
                label="Password"
                keyboardType="default"
                secureTextEntry
                required
                placeholder='Password'
                minLength={5}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
                autoCorrect={false}
              />
              {isSignup && <View style={styles.tacContainer}>
                <Text style={styles.tacText}>
                  By signing up, you agree to Apstro's  
                  <TouchableOpacity onPress={() => {props.navigation.navigate("TermsAndConditions")}}>
                    <Text style={styles.tacHyperlink}> Terms and Conditions</Text>
                  </TouchableOpacity>
                    <Text> and </Text> 
                  <TouchableOpacity onPress={() => {props.navigation.navigate("PrivacyPolicy")}}>
                    <Text style={styles.tacHyperlink}> Privacy Policy.</Text>
                  </TouchableOpacity>
                </Text>
              </View>}
              {!isSignup && <TouchableOpacity onPress={() => {props.navigation.navigate("ForgotPassword")}} >
                  <Text style={styles.selector}>Forgotten your password?</Text>
                </TouchableOpacity>
              }
              <View style={styles.buttonContainer}>
                {isLoading? <ActivityIndicator color='white'/> : <MyButton
                    title={'Continue'}
                    onPress={authHandler}
                  />}
              </View>
            </ScrollView>
          </View>
        </View>
        </Background>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    padding: 30,
    marginVertical: 40
  },
  hypText: {
    color: Colors.darkBlue,
    fontFamily: 'lexend-light'
  },
  header: {
    fontSize: 35,
    color: 'white',
    marginVertical: 5,
    fontFamily: 'lexend-light'
  },
  paragraph: {
    color: 'white',
    marginVertical: 10,
    fontSize: 18,
    fontFamily: 'lexend-light'
  },
  errorText: {
    color: 'red',
    marginVertical: 10,
    fontSize: 18,
    fontFamily: 'lexend-medium'
  },
  form: {
    justifyContent: 'center'
  },
  selector: {
    color: 'gray',
    alignSelf: 'flex-end',
    fontSize: 18,
    fontFamily: 'lexend-light'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tacText: {
    color: 'gray',
    alignSelf: 'flex-end',
    fontSize: 12,
    fontFamily: 'lexend-light',
    textAlign: 'center'
  },
  tacHyperlink: {
    color: 'pink',
    fontSize: 12,
    fontFamily: 'lexend-light',
    textAlign: 'center'
  },
  tacContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'center',
    padding: 15
  }
})

export default SignUpScreen;
