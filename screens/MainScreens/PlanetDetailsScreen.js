import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

import Background from '../../components/Background';
import Header from '../../components/Header'
import Colors from '../../constants/Colors'

const PlanetDetailsScreen = props => {

  const planetDetails = props.navigation.getParam('planetDetails')

  let ordinals;
  if (planetDetails.housePosition == 1) {
    ordinals = 'st'
  } else if (planetDetails.housePosition == 2) {
    ordinals = 'nd'
  } else if (planetDetails.housePosition == 3) {
    ordinals = 'rd'
  } else {
    ordinals = 'th'
  }

  let retrogradeText;
  if (planetDetails.retrograde) {
    retrogradeText = 'In Retrograde'
  } else {
    retrogradeText = 'Not in Retrograde'
  }

  let planetImage;
  switch (planetDetails.planetName) {
    case 'Sun':
      planetImage = require('../../assets/images/symbols/sun.png')
      break
    case 'Moon':
      planetImage = require('../../assets/images/symbols/moon.png')
      break
    case 'Mercury':
      planetImage = require('../../assets/images/symbols/venus.png')
      break
    case 'Venus':
      planetImage = require('../../assets/images/symbols/venus2.png')
      break
    case 'Mars':
      planetImage = require('../../assets/images/symbols/mars.png')
      break
    case 'Jupiter':
      planetImage = require('../../assets/images/symbols/venus.png')
      break
    case 'Saturn':
      planetImage = require('../../assets/images/symbols/venus.png')
      break
    case 'Uranus':
      planetImage = require('../../assets/images/symbols/venus.png')
      break
    case 'Neptune':
      planetImage = require('../../assets/images/symbols/venus.png')
      break
    case 'Pluto':
      planetImage = require('../../assets/images/symbols/venus.png')
      break
    case 'Chiron':
      planetImage = require('../../assets/images/symbols/venus.png')
      break
    case 'North Node':
      planetImage = require('../../assets/images/symbols/venus.png')
      break
    case 'Lilith':
      planetImage = require('../../assets/images/symbols/venus.png')
      break
    default: 
      planetImage = require('../../assets/images/symbols/venus.png')
  }

  let signImage; 
  
  return (
    <Background>
      <Header 
        title='Planet Details'
        backButton={true}
        navigateBack={() => {props.navigation.navigate('MyPlanets')}}
      />
    
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={styles.background}>
          <ScrollView style={{width: '100%'}}>
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
              <Image 
                source={planetImage}
                style={styles.planetImage}
              /> 
              <View style={styles.titleGroup}>
                <Text style={styles.header}>{planetDetails.planetName} in {planetDetails.signName}</Text>
                <Text style={styles.subHeader}>in the {planetDetails.housePosition}{ordinals} house</Text>
                <Text style={styles.degrees}>{planetDetails.degrees}° • {retrogradeText} </Text>
              </View>
              <View>
                <Text style={styles.paragraph}>{planetDetails.text}</Text>
              </View>
              <View>
                <Text style={styles.paragraph}>{planetDetails.houseText}</Text>
              </View>
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

export default PlanetDetailsScreen;
