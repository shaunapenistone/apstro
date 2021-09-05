import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';

import Background from '../../components/Background';
import HomepageContainer from '../../components/HomepageContainer';
import ElementsPercentageBar from '../../components/ElementsPercentageBar';
import Header from '../../components/Header'
import ZodiacStrengthBar from '../../components/ZodiacStrengthBar';
import ZodiacQualityBar from '../../components/ZodiacQualityBar';

const MyChartScreen = props => {

  const [natalData, setNatalData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    const getNatalData = async () => {
        const natalData = await AsyncStorage.getItem('natalData');
        const natalChart = JSON.parse(natalData)

          if(!natalData) {
            props.navigation.navigate('BirthTime')
            return 
          }
        
        setNatalData(natalChart)
        setDataLoaded(true)
        }
      ;
      getNatalData()
    }, [])

    return (
    <Background>
      <Header title='Chart Overview'/>
      { dataLoaded ? <ScrollView>
          <ElementsPercentageBar 
            elements={natalData.elements} 
          />
          <ZodiacStrengthBar 
            zodiacs={natalData.zodiacpoints}
          />
          <ZodiacQualityBar 
            zodiacs={natalData.planets}
          />
          <HomepageContainer 
            title='My Planets'
            para="The planets represent different parts of our psyche and depects a portrait of yourself, needs and desires."
            onPress={() => {props.navigation.navigate('MyPlanets')}}
          />
      </ScrollView> : <ActivityIndicator color='white' size='large'/>}
      </Background>
    )
};

const styles = StyleSheet.create({
  header: {
    fontFamily: 'lexend-light',
    color: 'white',
    fontSize: 30,
  },
  wheel: {
    height: 355,
    width: 330,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  wheelContainer: {
    height: 385,
    width: '85%',
    alignSelf: 'center',
    flex: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10
  },
  chartTitle: {
    fontFamily: 'lexend-light',
    color: 'white',
    fontSize: 30,
    position: 'absolute',
    zIndex: 1,
    bottom: 385
  },
  planetBanner: {
    height: 125,
    width: 100,
    overflow: 'visible'
  }
})

export default MyChartScreen;
