import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, FlatList } from 'react-native';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

import Background from '../../components/Background';
import Header from '../../components/Header'
import Colors from '../../constants/Colors'

const AscendantScreen = props => {

  const planetDetails = props.navigation.getParam('planetDetails')
  const risingSign = planetDetails.signName.toLowerCase()

  const [ lookalikePicArray, setLookalikePicArray ] = useState([])

  useEffect(() => {
    let imageArray = []
    firebase.firestore()
    .collection("acendantpictures")
    .doc(risingSign)
    .collection(`${risingSign}Pics`)
    .orderBy('creation', 'asc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let imageURL = doc.data().downloadURL
        let key = Math.round(Math.random() * 100000)
        imageArray.push({'image': imageURL, 'key': key})
      })
      setLookalikePicArray(imageArray)
  }).catch((error) => {
    console.log(error)
  })
  }, [])

  
  return (
    <Background>
      <Header 
        title='Your Ascendant'
        backButton={true}
        navigateBack={() => {props.navigation.navigate('MyPlanets')}}
      />
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={styles.background}>
          <ScrollView style={{width: '100%'}}>
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={styles.titleGroup}>
                <Text style={styles.header}>{planetDetails.signName} Ascendant</Text>
              </View>
              <View>
                <Text style={styles.paragraph}>{planetDetails.text}  </Text>
              </View>
              <View>
                <Text style={styles.paragraph}>{planetDetails.houseText}</Text>
              </View>
                <Text style={styles.header}>Celebrities with this ascendant:</Text>
              <View style={styles.celebPics}>
                <FlatList 
                  horizontal={true}
                  data={lookalikePicArray}
                  keyExtractor={item => item.id}
                  renderItem={(pic) => {
                    return <Image 
                      source={{uri: pic.item.image}}
                      style={styles.ascImages}
                    />
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    
  </Background>
  )
};

const styles = StyleSheet.create({
  header: {
    fontFamily: 'lexend-regular',
    color: 'gray',
    fontSize: 25,
  },
  background: {
    backgroundColor: Colors.opaque,
    color: 'gray',
    borderRadius: 30,
    justifyContent: 'center',
    width: '90%',
    height: '95%',
    alignItems: "center",
    margin: '3%',
    overflow: 'visible',
  },
  paragraph: {
    fontFamily: 'lexend-regular',
    color: 'gray',
    fontSize: 20,
  }, 
  titleGroup: {
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center',
    margin: 15
  },
  ascImages: {
    height: 150,
    width: 150,
    margin: 10,
    borderRadius: 10
  },
  celebPics: {
    height: 170,
    margin: 10
  }
})

export default AscendantScreen;
