import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Button, 
  Alert, 
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { useDispatch } from 'react-redux'
import * as authActions from '../../redux/actions/auth'

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
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(true);

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay'}])
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    // console.log(formState.inputValues)
    if (isSignup) {
      action = authActions.signup(
        formState.inputValues.email,
        formState.inputValues.password
      );
    } else {
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    setError(null)
    setIsLoading(true)
    try {
      await dispatch(action)
      isSignup ? props.navigation.navigate('BirthTime') : props.navigation.navigate('Chart')
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      // console.log(inputIdentifier)
      // console.log(inputValue)
      // console.log(inputValidity)
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

})

export default SignUpScreen;
