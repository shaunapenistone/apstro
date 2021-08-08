import React from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors'

const MyButton = props => {
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
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    fontFamily: 'lexend-medium',
    color: 'white',
    fontSize: 18
  }
});

export default MyButton;