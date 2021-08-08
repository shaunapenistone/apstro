import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'
import Background from '../../components/Background';
import Header from '../../components/Header'
import Colors from '../../constants/Colors'
import { bearerAccessToken } from '../../env';

const SunSignCompatabilityScreen = props => {

  const date = props.navigation.getParam('date')
  let day = parseInt(date.slice(8,10))
  let month = parseInt(date.slice(5,7))
  console.log(date.slice(5,7))

  const [ currentUserSunSign, setCurrentUserSunSign ] = useState('');
  const [ dataLoaded, setDataLoaded ] = useState(false)
  const [ otherSunSign, setOtherSunSign ] = useState()

  useEffect(() => {
    const getNatalData = async () => {
        const natalData = await AsyncStorage.getItem('natalData');
        const natalChart = JSON.parse(natalData)
        setCurrentUserSunSign(natalChart.planets[0].signId)
        }

    getNatalData()

    const getSignId = () => {
      fetch('https://api.bloom.be/api/natal-basic', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept-Encoding': 'application/json',
        'Authorization': `Bearer ${bearerAccessToken.key}`
      },
      body: JSON.stringify({
        name: 'hello',
        day: day,
        month: month
      })
    }).then(response => response.json())
    .then(data => {
      setOtherSunSign(data.profile.signId)
      console.log(data.profile)
    })}

    getSignId()

    }, [])

    
  
  return (
    <Background>
      <Header 
        title='Sun Compatibility'
        backButton={true}
        navigateBack={() => {props.navigation.navigate('MyFriends')}}
      />
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={styles.background}>
          <ScrollView style={{width: '100%'}}>
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    
  </Background>
  )
};

const styles = StyleSheet.create({
  header: {
    fontFamily: 'lexend-regular',
    color: 'gray',
    fontSize: 25,
  },
  subHeader: {
    fontFamily: 'lexend-regular',
    color: 'gray',
    fontSize: 20,
  },
  degrees: {
    fontFamily: 'lexend-light',
    color: 'gray',
    fontSize: 15,
  },
  planetImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    left: 0,
    zIndex: 2,
    shadowOpacity: 3,
    shadowColor: 'gray',
    shadowRadius: 3,
    shadowOffset: {width: 1, height: 1 },
    overflow: 'visible'
  },
  background: {
    backgroundColor: Colors.opaque,
    color: 'gray',
    borderRadius: 30,
    justifyContent: 'center',
    width: '90%',
    height: '95%',
    alignItems: "center",
    margin: '3%',
    overflow: 'visible',
  },
  paragraph: {
    fontFamily: 'lexend-regular',
    color: 'gray',
    fontSize: 20,
  }, 
  titleGroup: {
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center',
    margin: 15
  }
})

export default SunSignCompatabilityScreen;
