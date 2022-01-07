import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Colors from '../constants/Colors';

const HomepageContainer = props => {
  return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={{width: '100%', height: '100%'}} 
          onPress={props.onPress}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.h2}>{props.para}</Text>
            <Text style={styles.learn}>Press to learn more!</Text>
          </View>
        </TouchableOpacity>
      </View>
  ) 
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.opaque,
    flex: 1,
    height: 150,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  title: {
    fontFamily: 'lexend-regular',
    fontSize: 22,
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
  learn: {
    fontFamily: 'lexend-medium',
    fontSize: 13,
    color: 'gray',
    alignSelf: 'flex-end',
    alignItems: 'flex-end'
  },
  textContainer: {
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
    flex: 1
  },
  planetBanner: {
    height: 100,
    width: 100,
    overflow: 'visible',
    position: 'absolute',
    bottom: 100,
    right: 125,
  },
  h2: {
    fontFamily: 'lexend-regular',
    fontSize: 15,
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'center'
  },
})

export default HomepageContainer;