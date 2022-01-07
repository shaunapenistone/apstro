import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors'

const ElementsPercentageBar = props => {
  const fireSigns = (props.elements[0]).points
  const airSigns = (props.elements[1]).points
  const earthSigns = (props.elements[2]).points
  const waterSigns = (props.elements[3]).points

  let sumOfSigns = fireSigns + airSigns + earthSigns + waterSigns;

  const convToPer = point => {
    return Math.floor(point / sumOfSigns * 100) + '%'
  }

  const firePer = convToPer(fireSigns);
  const airPer = convToPer(airSigns);
  const earthPer = convToPer(earthSigns);
  const waterPer = convToPer(waterSigns)

  let titleText;
  if (fireSigns > airSigns && fireSigns > earthSigns && fireSigns > waterSigns) {
    titleText = 'Fire is your dominant element'
  } else if (airSigns > fireSigns && airSigns > waterSigns && airSigns > earthSigns) {
    titleText = 'Air is your dominant element'
  } else if (waterSigns > fireSigns && waterSigns > airSigns && waterSigns > earthSigns) {
    titleText = 'Water is your dominant element'
  } else if (earthSigns > fireSigns && earthSigns > airSigns && earthSigns > waterSigns) {
    titleText = 'Earth is your dominant element'
  } else if (earthSigns === waterSigns && earthSigns > airSigns && earthSigns > fireSigns) {
    titleText = 'Earth and Water are your dominant elements'
  } else if (earthSigns === airSigns && earthSigns > waterSigns && earthSigns > fireSigns) {
    titleText = 'Earth and Air are your dominant elements'
  } else if (earthSigns === fireSigns && earthSigns > waterSigns && earthSigns > airSigns) {
    titleText = 'Earth and Fire are your dominant elements'
  } else if (waterSigns === fireSigns && waterSigns > earthSigns && waterSigns > airSigns) {
    titleText = 'Water and Fire are your dominant elements'
  } else if (waterSigns === airSigns && waterSigns > earthSigns && waterSigns > fireSigns) {
    titleText = 'Water and Air are your dominant elements'
  } else if (airSigns === fireSigns && airSigns > waterSigns && airSigns > earthSigns) {
    titleText = 'Air and Fire are your dominant elements'
  } else {
    titleText = 'You have a very balanced chart'
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elements Overview</Text>
        <Text style={styles.header}>{titleText}</Text>
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
    height: 125,
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
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
  },
  header: {
    fontFamily: 'lexend-regular',
    color: 'gray',
    padding: 5,
    fontSize: 18,
    textAlign: 'center'
  },
  title: {
    fontFamily: 'lexend-regular',
    fontSize: 22,
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'center'
  },
})

export default ElementsPercentageBar;