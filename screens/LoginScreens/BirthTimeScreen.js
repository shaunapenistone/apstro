import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-community/picker'
import Moment from 'moment';
import 'moment-timezone';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import { bearerAccessToken } from '../../env';

import { useDispatch } from 'react-redux'
import * as authActions from '../../redux/actions/birthform'

import Background from '../../components/Background';
import Colors from '../../constants/Colors';
import MyButton from '../../components/MyButton';


const BirthTimeScreen = props => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [name, setName] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState()
  const [placesArray, setPlacesArray] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isUsernameValid, setUsernameValid] = useState(false)
  const [username, setUsername] = useState('')

  const dispatch = useDispatch();

  const onChangePlace = input => {
    if (input.length < 3) {
      return
    }

    fetch('https://api.bloom.be/api/places', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept-Encoding': 'application/json',
        'Authorization': `Bearer ${bearerAccessToken.key}`
      },
      body: JSON.stringify({
        name: input
      })
    }).then(response => response.json())
    .then(data => {
      if (data) {
        console.log(data)
        setDataLoaded(true)
        let arrayOfData = data.data
        setPlacesArray(arrayOfData)
      } else {
        setDataLoaded(false)
        Alert.alert('An Error Occurred!', 'Please try again later')
      }
    })}

    let placesSearchResults = placesArray.map(place => {
      return(
        <Picker.Item 
          label={place.name + ', ' + place.timezone } 
          value={place.id} 
          key={place.id}
        />
      )
    }
    )

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleDateConfirm = (date) => {
      let isoString = JSON.stringify(date)
      let birthDate = isoString.slice(1, 11)
      setDate(birthDate)
      hideDatePicker();
    };

    const usernameValidHandler = input => {
      const search = input.toLowerCase()

      let invalidChars = /[~`=!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]@/;
      
      if (search.length < 3) {
        setErrorText('Please enter a username with a length longer than 3')
        setUsernameValid(false)
        return
      } else if (search.length > 15) {
        setErrorText('Please enter a username with a length less than 15')
        setUsernameValid(false)
        return
      } else if (invalidChars.test(search)) {
        setErrorText('Only enter letters, numbers or underscores')
        setUsernameValid(false)
        return
      } else if ( search.indexOf(' ') >= 0) {
        setErrorText('Please check your username for spaces')
        return
      }
      setUsername(search)
      searchUsernameTaken(search)
  
      if ( !isUsernameValid ) {
        setErrorText('This username is already taken, please select another')
        return
      } 
    }

    const searchUsernameTaken = search => {
      firebase.firestore()
      .collection('users')
      .where('username', '==', search)
      .get()
      .then((snapshot) => {
        let usernames = snapshot.docs.map(doc => {
          const data = doc.data();
          const username = data.username;
          return { username, ...data }
        });
        if (usernames.length >= 1) {
          setUsernameValid(false)
        } else {
          setUsernameValid(true)
        }
      })}

    const handleTimeConfirm = (time) => {
      const convertUTCDateToLocalDate = (date) => {
        let newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
    
        let offset = date.getTimezoneOffset() / 60;
        let hours = date.getHours();
    
        newDate.setHours(hours - offset);
    
        return newDate;   
      }
      let convertedTime = convertUTCDateToLocalDate(time)
      let isoString = JSON.stringify(convertedTime)
      let birthTime = isoString.slice(12, 17)  
      setTime(birthTime)
      hideTimePicker();
    };

    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
  
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };

  const onChangeName = (text) => {
    setName(text)
  };

  const onSubmit = async () => {

    let isoTodaysDate = JSON.stringify(new Date())
    let todaysDate = isoTodaysDate.slice(1, 11)

    if (!selectedPlace) {
      Alert.alert('An Error Occurred!', 'Please search for and select a place')
      return
    } else if (!name) {
      Alert.alert('An Error Occurred!', 'Please enter a valid name')
      return
    } else if (date > todaysDate ) {
      Alert.alert('An Error Occurred!', 'Please enter a valid date')
      return 
    } else if (!isUsernameValid) {
      Alert.alert('An Error Occurred!', 'Please enter a valid username')
      return
    }


    let action = authActions.birthform(
      name,
      date,
      selectedPlace,
      time,
      username
    )

    setIsLoading(true)

    try {
      await dispatch(action)
      props.navigation.navigate('MyChart')
    } catch (err) {
      console.log(err)
      Alert.alert('Please try again later', "Sorry that didn't work, please try again later.")
      return
    }
  }

  return (
    <Background>
        <View style={styles.screen}>
          <ScrollView>
          <Text style={styles.header}>Please enter your birth time details:</Text>
          <View>
          <Text style={styles.label}>Display Name: </Text>
            <TextInput 
              placeholder='Name'
              style={styles.inputContainer}
              onChangeText={onChangeName}
            />
          <View>
          <View>
            <Text style={styles.label}>Username:</Text>
            <TextInput 
              placeholder='Username'
              style={styles.inputContainer}
              autoCompleteType='off'
              onChangeText={(search) => usernameValidHandler(search)}
            />
            {isUsernameValid ? 
              <Text style={styles.validUsername}>Username is Valid!</Text> : 
              <Text style={styles.errorText}>{errorText}</Text>
            }
          </View>
            <Text style={styles.label}>Birth Place:</Text>
            <View>
              <TextInput 
                placeholder='Search for the closest town'
                style={styles.inputContainer}
                onChangeText={(input) => onChangePlace(input)}
              />
              {dataLoaded && <View style={styles.pickerContainer}>
                    <Picker 
                      selectedValue={selectedPlace} 
                      onValueChange={(value) => {
                        if (!value) {
                          return;
                        }
                        setSelectedPlace(value)}
                      } 
                      style={styles.picker}
                      itemStyle={{height: 150, color: 'white'}}
                    >
                      <Picker.Item label="Select a place..." value={null} />  
                      {placesSearchResults}
                    </Picker>
                </View>
                }
              </View>
            </View>
            <View>
            <Text style={styles.label}>Date of Birth: </Text>
            {date ? <View>
              <Text style={styles.displayTime}>{Moment(date).format('MMMM DD, YYYY')}</Text> 
              <MyButton title='Reset Date' onPress={showDatePicker}/>
              </View> : <MyButton title="Select Date of Birth" onPress={showDatePicker} /> }
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
            <Text style={styles.label}>Time of Birth: </Text>
            {time ? <View>
              <Text style={styles.displayTime}>{time}</Text> 
              <MyButton title='Reset Time of Birth' onPress={showTimePicker}/>
              </View> : <MyButton title="Select Time of Birth" onPress={showTimePicker} /> }
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              touchableStyle={{color: 'gray'}}
              modalStyle={{color: 'gray'}}
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />
            {isLoading ? <ActivityIndicator color='white'/> : <MyButton 
              title='Confirm'
              onPress={onSubmit}
            />}
          </View>
          </View>
          </ScrollView>
        </View>
    </Background>
  
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    padding: 30,
    marginVertical: 30
  },
  header: {
    fontFamily: 'lexend-light',
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  label: {
    fontFamily: 'lexend-light',
    color: 'white',
    fontSize: 18,
  },
  inputContainer: {
    backgroundColor: Colors.opaque,
    color: 'gray',
    padding: 20,
    borderRadius: 30,
    margin: 10,
    justifyContent: 'center',
    fontFamily: 'lexend-regular'
  },
  displayTime: {
    fontFamily: 'lexend-light',
    color: 'gray',
    fontSize: 30,
    textAlign: 'center',
    margin: 5
  },
  errorText: {
    color: 'red',
    fontFamily: 'lexend-light',
    justifyContent: 'center',
    fontSize: 15,
    alignSelf: 'center',
    padding: 5,
    textAlign: 'center'
  },
  validUsername: {
    color: 'green',
    fontFamily: 'lexend-light',
    justifyContent: 'center',
    fontSize: 15,
    alignSelf: 'center',
    padding: 5,
    textAlign: 'center'
  }
})

export default BirthTimeScreen;
