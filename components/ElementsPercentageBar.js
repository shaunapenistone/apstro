import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors'

const ElementsPercentageBar = props => {
  const fireSigns = (props.elements[0]).points
  const airSigns = (props.elements[1]).points
  const earthSigns = (props.elements[2]).points
  const waterSigns = (props.elements[3]).points

  const convToPer = point => {
    return Math.floor(point / 13 * 100) + '%'
  }

  const firePer = convToPer(fireSigns);
  const airPer = convToPer(airSigns);
  const earthPer = convToPer(earthSigns);
  const waterPer = convToPer(waterSigns)

  let titleText;
  if (fireSigns > airSigns && fireSigns > earthSigns && fireSigns > waterSigns) {
    titleText = '🔥 Your dominant element is fire 🔥'
  } else if (airSigns > fireSigns && airSigns > waterSigns && airSigns > earthSigns) {
    titleText = '💨 Your dominant element is air 💨'
  } else if (waterSigns > fireSigns && waterSigns > airSigns && waterSigns > earthSigns) {
    titleText = '💧 Your dominant element is water 💧'
  } else if (earthSigns > fireSigns && earthSigns > airSigns && earthSigns > waterSigns) {
    titleText = '🌎 Your dominant element is earth 🌎'
  } else if (earthSigns === waterSigns && earthSigns > airSigns && earthSigns > fireSigns) {
    titleText = '🌎Your dominant elements are earth and water💧'
  } else if (earthSigns === airSigns && earthSigns > waterSigns && earthSigns > fireSigns) {
    titleText = '🌎Your dominant elements are earth and air💨'
  } else if (earthSigns === fireSigns && earthSigns > waterSigns && earthSigns > airSigns) {
    titleText = '🌎Your dominant elements are earth and fire🔥'
  } else if (waterSigns === fireSigns && waterSigns > earthSigns && waterSigns > airSigns) {
    titleText = '💧Your dominant elements are water and fire🔥'
  } else if (waterSigns === airSigns && waterSigns > earthSigns && waterSigns > fireSigns) {
    titleText = '💧Your dominant elements are water and air💨'
  } else if (airSigns === fireSigns && airSigns > waterSigns && airSigns > earthSigns) {
    titleText = '💨Your dominant elements are air and fire🔥'
  } else {
    titleText = '☯️ You have a very balanced chart ☯️'
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{titleText}</Text>
        <View style={styles.bar}>
          <View style={{...styles.fire, width: firePer}}>
          </View>
          <View style={{...styles.air, width: airPer}}>
          </View>
          <View style={{...styles.water, width: waterPer}}>
          </View>
          <View style={{...styles.earth, width: earthPer}}>
          </View>
        </View>
        <View style={styles.labels}>
          <Text style={styles.fireText}> {firePer} Fire</Text>
          <Text style={styles.airText}>{airPer} Air</Text>
          <Text style={styles.waterText}>{waterPer} Water</Text>
          <Text style={styles.earthText}>{earthPer}Earth</Text>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.opaque,
    height: 85,
    width: '85%',
    alignSelf: 'center',
    flex: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 10,
  },
  bar: {
    height: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    width: 325,
    justifyContent: 'center',
    borderRadius: 40,
    alignContent: 'center',
  },
  fire: {
    backgroundColor: Colors.pink,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  water: {
    backgroundColor: Colors.blue,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  air: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  earth: {
    backgroundColor: Colors.green,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'lexend-medium',
    color: 'gray',
    padding: 5,
    fontSize: 14,
    textAlign: 'center'
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
  fireText: {
    color: Colors.pink,
    fontFamily: 'lexend-medium',
    fontSize: 12
  },
  airText: {
    color: 'white',
    fontFamily: 'lexend-medium',
    fontSize: 12
  },
  waterText: {
    color: Colors.blue,
    fontFamily: 'lexend-medium',
    fontSize: 12
  },
  earthText: {
    color: '#81ad6d',
    fontFamily: 'lexend-medium',
    fontSize: 12
  }
})

export default ElementsPercentageBar;