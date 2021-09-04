import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import Background from '../../components/Background';
import * as authActions from '../../redux/actions/birthform'
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

const LoadingScreen = props => {
  const dispatch = useDispatch();
  const [ firebaseData, setFirebaseData ] = useState('')


  useEffect(() => {
    const tryLogin = async () => {
        const userData = await AsyncStorage.getItem('userData');
        if(!userData) {
          props.navigation.navigate('Auth');
          return 
        }
        const natalData = await AsyncStorage.getItem('natalData')
        console.log(userData.userId)

        if(!natalData) {
          firebase.firestore()
          .collection("users")
          .doc(userData.userId)
          .get()
          .then((snapshot) => {
            console.log(snapshot.doc())
            if (snapshot.exists) {
              setFirebaseData(snapshot.data())
              console.log('data found')
            } 
            else {
              props.navigation.navigate('BirthTime')
              console.log('data not found')
              return
            }
          })
          .catch((error) => {
            alert.Alert("Please re-enter your birth time information", error.message)
            props.navigation.navigate('BirthTime')
            return
          })

          let action = authActions.birthform(
            firebaseData.name,
            firebaseData.date,
            firebaseData.selectedPlace,
            firebaseData.time,
            firebaseData.username
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
        props.navigation.navigate('Chart');
        }
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
