import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import * as authActions from '../../redux/actions/auth';
import Background from '../../components/Background';


const LoadingScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
        const userData = await AsyncStorage.getItem('userData');

          if(!userData) {
            props.navigation.navigate('Auth');
            return 
          }
          const transformedData = JSON.parse(userData)
          const { token, userId, expiryDate } = transformedData;
          const expirationDate = new Date(expiryDate);

          if (expirationDate <= new Date() || !token || !userId) {
            props.navigation.navigate('Auth');
            return;
          }

          const expirationTime = expirationDate.getTime() - new Date().getTime();

          dispatch(authActions.authenticate(userId, token, expirationTime));

        const natalChart = await AsyncStorage.getItem('natalData');

        if(!natalChart) {
          
          props.navigation.navigate('BirthTime')
          return 
        }
        props.navigation.navigate('Chart');

        }
      ;
      tryLogin();
    }, [dispatch])

  return (
    <Background>
      <View styles={styles.screen}>
        <Text style={styles.header}>apstro</Text>
        <ActivityIndicator color='white' size='large'/>
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
  }
})

export default LoadingScreen;
