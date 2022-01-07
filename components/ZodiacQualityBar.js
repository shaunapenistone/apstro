import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors'

const ZodiacQualityBar = props => {
  let zodiacArray = props.zodiacs

  let cardinalCounter = 0;
  let fixedCounter = 0;
  let mutableCounter = 0;

  zodiacArray.forEach((zodiacPoint) => {
    if (zodiacPoint.planetName === 'Pars Fortuna' || zodiacPoint.planetName === 'North Node') {
      return
    }
    let sign = zodiacPoint.signName
    if (sign === 'Aries' || sign === 'Libra' || sign === 'Cancer' || sign === 'Capricorn') {
      cardinalCounter++
    } else if (sign === 'Leo' || sign === 'Aquarius' || sign === 'Scorpio' || sign === 'Taurus') {
      fixedCounter++
    } else if (sign === 'Sagittarius' || sign === 'Gemini' || sign === 'Pisces' || sign === 'Virgo') {
      mutableCounter++
    } else {
      console.log('Unknown zodiac name  :' + sign)
    }
  })

  let sumOfSigns = cardinalCounter + fixedCounter + mutableCounter;

  const convToPer = point => {
    return Math.floor(point / sumOfSigns * 100) + '%'
  }

  let cardinalPer = convToPer(cardinalCounter)
  let fixedPer = convToPer(fixedCounter)
  let mutablePer = convToPer(mutableCounter);

  let headerText;


  if (cardinalCounter > fixedCounter && cardinalCounter > mutableCounter) {
    headerText = 'Your chart is mainly Cardinal'
  } else if (fixedCounter > cardinalCounter && fixedCounter > mutableCounter) {
    headerText = 'Your chart is mainly Fixed'
  } else if (mutableCounter > fixedCounter && mutableCounter > cardinalCounter) {
    headerText = 'Your chart is mainly Mutable'
  } else {
    headerText = 'You have a balanced chart'
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Modality Strength</Text>
        <Text style={styles.header}>{headerText}</Text>
        <View style={styles.bar}>
          <View style={{...styles.cardinal, width: cardinalPer}}>
          </View>
          <View style={{...styles.fixed, width: fixedPer}}>
          </View>
          <View style={{...styles.mutable, width: mutablePer}}>
          </View>
        </View>
        <View style={styles.labels}>
          <Text style={styles.cardinalText}> {cardinalPer} Cardinal</Text>
          <Text style={styles.fixedText}>{fixedPer} Fixed</Text>
          <Text style={styles.mutableText}>{mutablePer} Mutable</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.opaque,
    height: 125,
    alignSelf: 'center',
    flex: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
    width: '100%'
  },
  bar: {
    height: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    width: 300,
    justifyContent: 'center',
    borderRadius: 40,
    alignContent: 'center',
  },
  cardinal: {
    backgroundColor: Colors.pink,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mutable: {
    backgroundColor: Colors.blue,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fixed: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  items: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  cardinalText: {
    color: Colors.pink,
    fontFamily: 'lexend-medium',
    fontSize: 12
  },
  fixedText: {
    color: 'white',
    fontFamily: 'lexend-medium',
    fontSize: 12
  },
  mutableText: {
    color: Colors.blue,
    fontFamily: 'lexend-medium',
    fontSize: 12
  },
  title: {
    fontFamily: 'lexend-regular',
    fontSize: 22,
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'center'
  },
  header: {
    fontFamily: 'lexend-regular',
    color: 'gray',
    padding: 5,
    fontSize: 18,
    textAlign: 'center'
  },
  
})

export default ZodiacQualityBar;