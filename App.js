import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as firebase from 'firebase';
import 'firebase/firestore';

import ApstroNavigator from './navigation/ApstroNavigator';
import authReducer from './redux/reducers/auth';

import { firebaseConfig } from './env';
import { useEffect } from 'react/cjs/react.development';

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}

export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const fetchFonts = () => {
  return Font.loadAsync({
    'lexend-light': require('./assets/fonts/Lexend-Light.ttf'),
    'lexend-medium': require('./assets/fonts/Lexend-Medium.ttf'),
    'lexend-regular': require('./assets/fonts/Lexend-Regular.ttf'),
    'lexend-thin': require('./assets/fonts/Lexend-Thin.ttf')
  })
}


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => {setFontLoaded(true)}}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ApstroNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
