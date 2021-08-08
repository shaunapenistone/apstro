import React from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors'

const BarButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.opaque,
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 25,
    margin: 5,
  },
  text: {
    fontFamily: 'lexend-light',
    color: 'gray',
    fontSize: 16,
    justifyContent: 'center',
    alignSelf: 'center',    
  }
});

export default BarButton;