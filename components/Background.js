import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors'

const Background = props => {
  return (
    <LinearGradient
      colors={[Colors.yellow, Colors.blue, Colors.pink]} 
      style={styles.gradient}
    >
      {props.children}
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%'
  },
})

export default Background;