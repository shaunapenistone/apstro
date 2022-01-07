import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import Background from '../../components/Background';
import * as authActions from '../../redux/actions/birthform'
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

const LoadingScreen = props => {
  const dispatch = useDispatch();

  const sendDataToApi = async (name, dob, placeId, time, username) => {
    let action = authActions.birthform(
      name,
      dob,
      placeId,
      time,
      username
    )
    try {
      await dispatch(action)
      props.navigation.navigate('MyChart')
    } catch (err) {
      props.navigation.navigate('BirthTime')
      Alert.alert('Please try again later', "Sorry that didn't work, please try again later.")
      return
    }
  } 

  useEffect(() => {
    const tryLogin = async () => {
        const userData = await AsyncStorage.getItem('userData');
        const userId = props.navigation.getParam('userId')

        if(!userData) {
          props.navigation.navigate('Auth');
          return 
        }
        
        const natalData = await AsyncStorage.getItem('natalData')

        if (natalData) {
          props.navigation.navigate('MyChart')
        } else {
          firebase.firestore()
          .collection("users") 
          .doc(userId)
          .get()
          .then((snapshot) => {
            if (snapshot.exists) {
              let userNatalData = snapshot.data()
              sendDataToApi(
                userNatalData.name, 
                userNatalData.dob,
                userNatalData.placeId,
                userNatalData.time,
                userNatalData.username
              )
            } else {
              props.navigation.navigate('BirthTime')
              return
            }
          })
          .catch((error) => {
            console.log(error)
            Alert.alert("Please re-enter your birth time information", error.message)
            props.navigation.navigate('BirthTime')
            return
          })

        }}
      ;
      tryLogin();
    }, [dispatch])

  return (
    <Background>
      <View styles={styles.screen}>
        <Text style={styles.header}>apstro</Text>
        <ActivityIndicator color='white' size='large'/>
      </View>
    </Background>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'lexend-regular',
    fontSize: 60,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 60
  },
  container: {
    marginVertical: 60
  }
})

export default LoadingScreen;
