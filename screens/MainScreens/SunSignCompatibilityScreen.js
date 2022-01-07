import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'
import Background from '../../components/Background';
import Header from '../../components/Header'
import Colors from '../../constants/Colors'
import { bearerAccessToken } from '../../env';

const SunSignCompatabilityScreen = props => {

  const otherSignDate = props.navigation.getParam('date');
  const otherSignUserData = props.navigation.getParam('user')

  const [ dataLoaded, setDataLoaded ] = useState(false)
  const [ currentUserSunSignId, setCurrentUserSunSignId ] = useState('');
  const [ starSigns, setStarSigns ] = useState('')
  const [ loveReportData, setLoveReportData ] = useState('');

  const getNatalData = async () => {
    const natalData = await AsyncStorage.getItem('natalData');
    const natalChart = JSON.parse(natalData)
    setCurrentUserSunSignId(natalChart.planets[0].signId)
  }
  getNatalData()

  const getSignId = (date) => {
    let month = parseInt(date.slice(5,7))
    let day = parseInt(date.slice(8,10))

    if ( (month === 3 && day >= 21) || (month === 4 && day <= 19) ) {
      // aries 
      return 12
    } else if ( (month === 4 && day >= 20) || (month === 5 && day <= 20) ) {
      // taurus
      return 1
    } else if ( (month === 5 && day >= 21) || (month === 6 && day <= 20) ) {
      // gemini
      return 2
    } else if ( (month === 6 && day >= 21) || (month === 7 && day <= 22) ) {
      // cancer
      return 3
    } else if ( (month === 7 && day >= 23) || (month === 8 && day <= 22) ) {
      // leo
      return 4
    } else if ( (month === 8 && day >= 23) || (month === 9 && day <= 22) ) {
      // virgo
      return 5
    }  else if ( (month === 9 && day >= 23) || (month === 10 && day <= 22) ) {
      // libra
      return 6
    } else if ( (month === 10 && day >= 23) || (month === 11 && day <= 21) ) {
      // scorpio
      return 7
    } else if ( (month === 11 && day >= 22) || (month === 12 && day <= 21) ) {
      // sagittarius
      return 8
    } else if ( (month === 12 && day >= 22) || (month === 1 && day <= 19) ) {
      // capricorn
      return 9
    } else if ( (month === 1 && day >= 20) || (month === 2 && day <= 18) ) {
      // aquarius
      return 10
    } else if ( (month === 2 && day >= 19) || (month === 3 && day <= 20) ) {
      // pisces
      return 11
    }
  }

  let loveInterestSignId;
  
  if (otherSignDate) {
    loveInterestSignId = getSignId(otherSignDate)
  } else if (otherSignUserData) {
    loveInterestSignId = getSignId(otherSignUserData)
  }

  const getCompatibilityReport = (sign1, sign2) => {
    if (!sign1 || !sign2) {
      return
    }
    fetch('https://api.bloom.be/api/signtosign', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept-Encoding': 'application/json',
        'Authorization': `Bearer ${bearerAccessToken.key}`
      },
      body: JSON.stringify({
        "sign1_id": sign1,
        "sign2_id": sign2
      })
    }).then(response => response.json())
    .then(data => {
      if (data) {
        setDataLoaded(true)
        let loveSigns = data.text.intro
        let loveData = data.text.text
        setStarSigns(loveSigns);
        setLoveReportData(loveData);
      } else {
        setDataLoaded(false)
        Alert.alert('An Error Occurred!', 'Please try again later')
      }})
    }

    !dataLoaded && getCompatibilityReport(currentUserSunSignId, loveInterestSignId)

    const signsHeader = starSigns.replace(/<br\s*[\/]?>/gi, "\n").replace("&nbsp;", "").replace(/(<([^>]+)>)/gi, "")
    const loveReportText = loveReportData.replace(/<br\s*[\/]?>/gi, "\n").replace("&nbsp;", "").replace(/(<([^>]+)>)/gi, "")

  return (
    <Background>
      <Header 
        title='Sun Compatibility'
        backButton={true}
        navigateBack={() => {props.navigation.navigate('MyFriends')}}
      />
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={styles.background}>
          {dataLoaded ? <ScrollView style={{width: '100%'}}>
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={styles.header}>{signsHeader}</Text>
              <Text style={styles.paragraph}>{loveReportText}</Text>
            </View>
          </ScrollView> : <ActivityIndicator color='white' size='large'/>} 
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
    margin: 20
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
    fontFamily: 'lexend-light',
    textAlign: 'center',
    color: 'gray',
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 7
  }, 
  titleGroup: {
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center',
    margin: 15
  }
})

export default SunSignCompatabilityScreen;
