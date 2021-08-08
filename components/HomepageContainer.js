import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
            <Text style={styles.paragraph}>{props.para}</Text>
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
    height: 115,
    width: '85%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    margin: 0,
    margin: 10
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
  }
})

export default HomepageContainer;