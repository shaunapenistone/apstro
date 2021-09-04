import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import Background from '../../components/Background';
import PlacementHolder from '../../components/PlacementHolder'
import Header from '../../components/Header'

const PlanetsOverViewScreen = props => {

  const [natalData, setNatalData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    const getNatalData = async () => {
        const natalData = await AsyncStorage.getItem('natalData');
        const natalChart = JSON.parse(natalData)

          if(!natalData) {
            //  retrieve data from firebase - if null, send to birth chart form 
            console.log('nothing found')
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
      <Header 
        title='Your Planets'
        backButton={false}
      />
      {dataLoaded ? <ScrollView>
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.container}>
            <PlacementHolder 
              placementDetails={natalData.housecusps[0]}
              acendant={true}
              imagePosition='left'
              placement='Ascendant'
              image={require('../../assets/images/symbols/ascendant.png')}
              paragraph="Your ascendant represents how you're percieved and reflects your physical body, initial impressions and outward style."   
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'Ascendant',
                  params: {
                    planetDetails: natalData.housecusps[0]
                  }
                })}}
            />
            <PlacementHolder 
              imagePosition='right'
              placement='Sun'
              placementDetails={natalData.planets[0]}
              image={require('../../assets/images/symbols/sun.png')}
              paragraph='The Sun rules your ego, basic personality and sense of self. It brings positivity to the house it lands in. '
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[0]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[1]}
              imagePosition='left'
              placement='Moon'
              image={require('../../assets/images/symbols/moon.png')}
              paragraph='The moon rules emotions and shows how we emote, as well your unconcscious. '
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[1]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[2]}
              imagePosition='right'
              placement='Mercury'
              image={require('../../assets/images/symbols/mercury.png')}
              paragraph='Mercury is the planet of communication and reflects logic and rationality. It shows the way you think and communicate your ideas.'
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[2]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[3]}
              paragraph='Named after the God of love and beauty, Venus represents our romantic interests and where we find comfort and pleasure'
              imagePosition='left'
              placement='Venus'
              image={require('../../assets/images/symbols/venus.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[3]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[4]}
              paragraph='Mars is the planet of passion and anger, and indicates how you assert yourself, drive your will and cut people off.'
              imagePosition='right'
              placement='Mars'
              image={require('../../assets/images/symbols/mars.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[4]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[5]}
              paragraph='The planet of luck, jupiter represents how we experience fortune, wealth and success. It brings luck to the house it lands in.'
              imagePosition='left'
              placement='Jupiter'
              image={require('../../assets/images/symbols/jupiter.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[5]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[6]}
              paragraph='As one of the more unfortunate planets, Saturn indicates how we approach our responsibilities and point to traits we have trouble expressing.'
              imagePosition='right'
              placement='Saturn'
              image={require('../../assets/images/symbols/venus.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[6]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[7]}
              paragraph='The coldest planet in our solar system, Uranus represents chaos, innovation and change.'
              imagePosition='left'
              placement='Uranus'
              image={require('../../assets/images/symbols/uranus.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[7]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[8]}
              paragraph='Neptune rules our dream world and imagination, and indicates what we fantasise about and truly long for.'
              imagePosition='right'
              placement='Neptune'
              image={require('../../assets/images/symbols/neptune.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[8]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[9]}
              paragraph='Named after God of the underworld, Pluto represents renewal and rebirth and shows where we search for deeper meaning'
              imagePosition='left'
              placement='Pluto'
              image={require('../../assets/images/symbols/venus.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[9]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[10]}
              paragraph='Known as the wonded healer, Chiron shows where we are vunerable and where we preach lessons but struggle to apply to our own lives.'
              imagePosition='right'
              placement='Chiron'
              image={require('../../assets/images/symbols/chiron.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[10]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[12]}
              paragraph="The North and South Nodes tell the story of your current destiny and previous lives."
              imagePosition='left'
              placement='North Node'
              image={require('../../assets/images/symbols/nonode.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[12]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.planets[11]}
              paragraph="lilith text"
              imagePosition='right'
              placement='Lilith'
              image={require('../../assets/images/symbols/lilith.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.planets[11]
                  }
                })}}
            />
            <PlacementHolder 
              placementDetails={natalData.housecusps[10]}
              acendant={true}
              paragraph="As the highest point on your chart, your Midhaven represents your public image (wether it be on social media or the general public) and describes our purpose."
              imagePosition='left'
              placement='Midhaven'
              image={require('../../assets/images/symbols/midhaven.png')}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'PlanetsDetail',
                  params: {
                    planetDetails: natalData.housecusps[10]
                  }
                })}}
            />
          </View>
        </SafeAreaView>
      </ScrollView> : <ActivityIndicator color='white' size='large'/>}
    </Background>
    )
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  header: {
    fontFamily: 'lexend-light',
    color: 'white',
    fontSize: 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 30
  }
})

export default PlanetsOverViewScreen;
