import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Switch, ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

import * as compatibilityActions from '../../redux/actions/compatibility'

import Background from '../../components/Background'
import Header from '../../components/Header'

const SynastryReportScreen = props => {
  const otherUserData = props.navigation.getParam('user');
  const [ myData, setMyData ] = useState()
  const [ birthData, setBirthData ] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    const getUserId = async () => {
        const userData = await AsyncStorage.getItem('userData');
        const parsedUserData = JSON.parse(userData)
        setMyData(parsedUserData.userId)
        }
      ;
      getUserId()

    const getNatalData = () => {
      firebase.firestore()
      .collection("users")
      .doc(myData)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setBirthData(snapshot.data())
        }
      })
    }
    getNatalData()

    const getSynastryReport = async () => {
      let action = compatibilityActions.compatibility(
        birthData.name,
        birthData.dob,
        birthData.placeId,
        birthData.time,
        otherUserData.name,
        otherUserData.dob,
        otherUserData.placeId,
        otherUserData.time
      )
  
      setIsLoading(true)
  
      try {
        await dispatch(action)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        Alert.alert('Please try again later', "Sorry that didn't work, please try again later.")
        return
      }
    }
    getSynastryReport()
    }, [])

  return (
    <View style={styles.screen}>
      <Background>
        <Header 
          title='Your Compatibility'
          backButton={true}
          navigateBack={() => {props.navigation.navigate('Profile')}}
        />
        { isLoading ? <View>
          
        </View> : <ActivityIndicator color='white' size='large'/>}
    </Background>
  </View>
    )
};

const styles = StyleSheet.create({

})

export default SynastryReportScreen;