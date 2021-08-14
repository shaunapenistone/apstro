import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Colors from '../../constants/Colors'


const TermsAndConditionsScreen = props => {

  return (
    <Background>
      <View styles={styles.screen}>
        <Header 
          title='Terms and Conditions'
          backButton={true}
          navigateBack={() => {props.navigation.navigate('Auth')}}
        />
        <View style={styles.background}>
          <ScrollView>

          </ScrollView>
        </View>
      </View>
    </Background>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'lexend-regular',
    fontSize: 60,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 60
  },
  container: {
    marginVertical: 60
  },
  background: {
    backgroundColor: Colors.opaque,
    alignSelf: 'center',
    color: 'gray',
    borderRadius: 30,
    justifyContent: 'center',
    width: '90%',
    height: '88%',
    alignItems: "center",
    margin: '3%',
    overflow: 'visible',
    padding: 10
  },
})

export default TermsAndConditionsScreen;