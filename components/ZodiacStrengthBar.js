import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Colors from '../constants/Colors'


const ZodiacStrengthBar = props => {

  let sortedArray = props.zodiacs.sort((a, b) => {
    if (a.strength > b.strength) {
      return -1
    }
    if (a.strength < b.strength) {
      return 1
    }
    return 0
  })
  
  let filteredArray = sortedArray.filter(sign => sign.strength > 0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Strongest Signs</Text>
      <View>
        <Text style={styles.header}>🥇 {filteredArray[0].name}</Text>
        <Text style={styles.h2}>{filteredArray[0].strength} planets in {filteredArray[0].name}</Text>
      </View>
      <View>
        <Text style={styles.header}>🥈 {filteredArray[1].name}</Text>
        <Text style={styles.h2}>{filteredArray[1].strength} planets in {filteredArray[1].name}</Text>
      </View>
      <View>
        <Text style={styles.header}>🥉 {filteredArray[2].name}</Text>
        <Text style={styles.h2}>{filteredArray[2].strength} planets in {filteredArray[2].name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.opaque,
    width: '85%',
    alignSelf: 'center',
    flex: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 10,
    paddingVertical: 20
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
  h2: {
    fontFamily: 'lexend-regular',
    fontSize: 15,
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 14,
    fontFamily: 'lexend-regular',
    color: 'gray',
    textAlign: 'center'
  },
})

export default ZodiacStrengthBar;