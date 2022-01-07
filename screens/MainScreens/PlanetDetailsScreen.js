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

  // removing HTML & ; tags 
  const planetText = planetDetails.text.text.replace("<p>&nbsp;</p>", "\n").replace(/<br\s*[\/]?>/gi, "\n").replace("&nbsp;", "").replace(/(<([^>]+)>)/gi, "")
  const planetHouseText = planetDetails.housetext.text.replace(/<br\s*[\/]?>/gi, "\n").replace("&nbsp;", "").replace(/(<([^>]+)>)/gi, "")

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
              <View style={styles.titleGroup}>
                <Text style={styles.header}>{planetDetails.planetName} in {planetDetails.signName}</Text>
                <Text style={styles.subHeader}>in the {planetDetails.housePosition}{ordinals} house</Text>
                <Text style={styles.degrees}>{planetDetails.degrees}° • {retrogradeText} </Text>
              </View>
              <View style={styles.textSeperator}>
                <Text style={styles.subHeader}>{planetDetails.planetName} in {planetDetails.signName}</Text>
                <Text style={styles.paragraph}>{planetText}</Text>
              </View>
              <View style={styles.textSeperator}>
              <Text style={styles.subHeader}>{planetDetails.planetName} in the {planetDetails.housePosition}{ordinals} house</Text>
                <Text style={styles.paragraph}>{planetHouseText}</Text>
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
    textAlign: 'center'
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
    overflow: 'hidden',
  },
  paragraph: {
    fontFamily: 'lexend-light',
    textAlign: 'center',
    color: 'gray',
    fontSize: 20,
  }, 
  titleGroup: {
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center',
    margin: 15
  },
  textSeperator: {
    paddingVertical: 10,
    paddingHorizontal: 7
  }
})

export default PlanetDetailsScreen;
