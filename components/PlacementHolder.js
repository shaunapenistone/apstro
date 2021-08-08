import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Colors from '../constants/Colors'

const PlacementHolder = props => {

  let imagePosition;
  if (props.imagePosition === 'left') {
    imagePosition = styles.imageLeft
  } else {
    imagePosition = styles.imageRight
  }

  let planetData = props.placementDetails

  let ordinals;
  
  if (planetData.housePosition == 1) {
    ordinals = 'st'
  } else if (planetData.housePosition == 2) {
    ordinals = 'nd'
  } else if (planetData.housePosition == 3) {
    ordinals = 'rd'
  } else {
    ordinals = 'th'
  }


  return (
    <View style={styles.container}>
      <Image 
        source={props.image}
        style={imagePosition}
      />
      <View style={styles.background}>
        <TouchableOpacity onPress={props.onPress} >
          <View style={styles.text}>
            {!props.acendant ? 
              <View>
                <Text style={styles.title}>{props.placement} in {planetData.signName}</Text>
                <Text style={styles.subTitle}>in the {planetData.housePosition}{ordinals} House</Text> 
              </View> : 
              <Text style={styles.title}> {planetData.signName} {props.placement}</Text>
            }
            <Text style={styles.paragraph}>{props.paragraph}</Text>
            <Text style={styles.learn}>Press to Learn More! </Text>
          </View>
        </TouchableOpacity>
      </View>
  </View>
  )
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.opaque,
    color: 'gray',
    borderRadius: 30,
    justifyContent: 'center',
    width: 350,
    height: 170,
    flex: 1,
    alignItems: "center"
  },
  container: {
    justifyContent: 'center',
    width: '85%',
    height: 175,
    flex: 1,
    alignSelf: 'center',
    marginVertical: 20
  },
  title: {
    fontFamily: 'lexend-regular',
    fontSize: 20,
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'center'
  },
  subTitle: {
    fontFamily: 'lexend-regular',
    fontSize: 17,
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 15,
    fontFamily: 'lexend-light',
    color: 'gray'
  },
  learn: {
    fontFamily: 'lexend-medium',
    fontSize: 13,
    color: 'gray',
    alignSelf: 'flex-end',
    alignItems: 'flex-end'
  },
  imageLeft: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 135,
    left: -30,
    right: 0,
    zIndex: 2,
    shadowOpacity: 5,
    shadowColor: 'white',
    shadowRadius: 5,
    shadowOffset: {width: 1, height: 3 },
    overflow: 'visible'
  },
  imageRight: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 135,
    left: 270,
    right: 0,
    zIndex: 1,
    shadowOpacity: 5,
    shadowColor: 'white',
    shadowRadius: 5,
    shadowOffset: {width: 1, height: 3 },
    overflow: 'visible'
  },
  text: {
    alignSelf: 'center',
    width: '95%',
    paddingHorizontal: 10,
    zIndex: 1,
    alignItems: "center",
    textAlign: 'center'
  }
});

export default PlacementHolder;