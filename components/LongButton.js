import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors'

const LongButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.opaque,
    color: 'gray',
    padding: 20,
    borderRadius: 30,
    margin: 10,
    justifyContent: 'space-between',
    fontFamily: 'lexend-regular',
    flexDirection: 'row',
    width: 350,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'lexend-light',
    color: 'gray',
    fontSize: 16,   
    textAlign: 'center',
    alignSelf: 'center'
  }
});

export default LongButton;