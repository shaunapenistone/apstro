import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import { bearerAccessToken } from '../../env';

export const BIRTHFORM = 'BIRTHFORM';
export const CLEARDATA = 'CLEARDATA';

export const birthform = (name, dob, birthplace, time, username) => {
  console.log('username at the start of birthform ' + username)

  return async dispatch => {
    const response = await fetch(
      'https://api.bloom.be/api/natal', 
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            'Accept-Encoding': 'application/json',
            'Authorization': `Bearer ${bearerAccessToken.key}`
          },
          body: JSON.stringify({
            name: name,
            date: dob,
            time: time,
            place_id: birthplace,
            lang: "en",
            wheelSettings: {
              "COLOR_BACKGROUND": "red"
            }
          })
        }
      )
      if (!response.ok) {
        Alert.alert('Please try again later', "Sorry, that didn't work. Please try again later.")
        return 
        
        // throw new Error(message)
      }
      const resData = await response.json();

      saveDataToStorage(
        resData.planets, 
        resData.elements, 
        resData.wheel, 
        resData.intro,
        resData.aspects,
        resData.housecusps,
        resData.zodiacPoints
        )

        let rising = resData.housecusps[0].signName
        let sun = resData.planets[0].signName
        let moon = resData.planets[1].signName
        let venus = resData.planets[3].signName
        let mercury = resData.planets[2].signName

      saveDataToFirebase(
        name, 
        dob,
        time,
        birthplace,
        username,
        rising,
        sun,
        moon,
        venus, 
        mercury
        )
  }}


  const saveDataToStorage = (planets, elements, wheelId, intro, aspects, housecusps, zodiacPoints) => {
    AsyncStorage.setItem(
      'natalData',
      JSON.stringify({
        planets: planets,
        elements: elements,
        wheel: wheelId,
        intro: intro, 
        aspects: aspects,
        housecusps: housecusps,
        zodiacpoints: zodiacPoints
      })
    );
  };

  const saveDataToFirebase = async (name, dob, time, placeId, username, rising, sun, moon, venus, mercury) => {
    const userData = await AsyncStorage.getItem('userData');
    const userId = JSON.parse(userData)

    // adds in user's birth form data 
    firebase.firestore().collection('users')
    .doc(userId.userId)
    .set({
      name,
      dob,
      time,
      placeId,
      username,
      rising,
      sun,
      moon, 
      venus,
      mercury
    })
    .catch((error) => console.log(error))

  }


  export const clearData = () => {
    AsyncStorage.removeItem('natalData');
    return { type: CLEARDATA };
  }


