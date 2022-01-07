import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Header = props => {
  return (
    <View style={styles.header}>
      {props.backButton && 
      <View style={styles.backButton}>
        <TouchableOpacity onPress={props.navigateBack}>
          <Ionicons 
            name="chevron-back-circle-outline" 
            size={40} 
            color="white" 
          />
        </TouchableOpacity>
      </View>
      }
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 83,
    paddingTop: 36,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginVertical: 15
    },
  title: {
    color: 'white',
    fontFamily: 'lexend-light',
    fontSize: 35,
  },
  backButton: {
    position: 'absolute',
    left: 17,
    bottom: 5
  }
});

export default Header