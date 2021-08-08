import { Alert } from 'react-native';
import { bearerAccessToken } from '../../env';

export const COMPATIBILITY = 'COMPATIBILITY';

export const compatibility = (name1, dob1, birthplace1, time1, name2, dob2, birthplace2, time2) => {
  return async dispatch => {
    const response = await fetch(
      'https://api.bloom.be/api/synastry', 
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            'Accept-Encoding': 'application/json',
            'Authorization': `Bearer ${bearerAccessToken.key}`
          },
          body: JSON.stringify({
            name_1: name1,
            date_1: dob1,
            time_1: time1,
            place_id_1: birthplace1,
            name_2: name2,
            date_2: dob2,
            time_2: time2,
            place_id_2: birthplace2,
            lang: 'en'
          })
        }
      )
      if (!response.ok) {
        Alert.alert('Please try again later', "Sorry, that didn't work. Please try again later.")
        console.log(response.status)
        return 
      }
      const resData = await response.json();
      console.log(resData)
  }}