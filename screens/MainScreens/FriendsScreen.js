import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Share } from 'react-native';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';
import 'moment-timezone';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import BarButton from '../../components/BarButton';
import MyButton from '../../components/MyButton';

const FriendsScreen = props => {

  const [ users, setUsers ] = useState([]);
  const [ isDatePickerVisible, setDatePickerVisibility ] = useState(false);
  const [ date, setDate ] = useState(false);

  const onSearchFriendHandler = (input) => {
    let search = input.toLowerCase()

    if (!input) {
      setUsers(false)
      return
    }

    firebase.firestore()
    .collection('users')
    .where('username', '>=', search)
    .limit(3) 
    .get()
    .then((snapshot) => {
      let users = snapshot.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data }
      });

      setUsers(users)
    })
  }

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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "I'm on Apstro! Add me to see our astrological compatibility",
        url: 'www.google.com'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const confirmDateHandler = () => {
    props.navigation.navigate({
      routeName: 'SunSignCompatibility',
      params: {
        date: date,
      }
    })
  }

  return (
    <View style={styles.screen}>
      <Background>
        <Header title='Compatibility'/>
        <ScrollView>
          <View style={styles.content}>
            <TextInput 
              placeholder='Search by Username'
              style={styles.inputContainer}
              onChangeText={(search) => onSearchFriendHandler(search)}
            />
            {users && <View>
                <FlatList 
                  numColumns={1}
                  horizontal={false}
                  data={users}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate({
                        routeName: 'Profile',
                        params: {
                          uid: item.id
                        }
                      })}
                    >
                      <View style={styles.resultsContainer}>
                        <Text style={styles.resultsText}>@{item.username} - {item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                /> 
              </View>}
              <View style={styles.buttons}>
                <BarButton 
                  onPress={onShare}
                  title="Share your profile"
                /> 
                <BarButton 
                  onPress={onShare}
                  title="Invite your friend"
                />
              </View>
              {/* <View>
                <Text style={styles.title}>My Favourites</Text>
                <View style={styles.sunCompatibility}>
                      <Text>Test</Text>
                </View>
              </View> */}
              <View>
                <Text style={styles.title}>Sun Sign Compatbility</Text>
                <View style={styles.sunCompatibility}>
                  <Text style={styles.text}>Don't know their birth time?</Text>
                  {date ? <View>
                    <Text style={styles.displayTime}>{Moment(date).format('MMMM DD, YYYY')}</Text>
                      <View style={styles.buttons}>
                        <BarButton title='Reset Date' onPress={showDatePicker}/>
                        <BarButton title='Confirm' onPress={confirmDateHandler} />
                      </View>
                    </View> : <BarButton title="Select Date of Birth" onPress={showDatePicker} /> }
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>
              </View>              
              
          </View>
          <View>
          </View>
      </ScrollView>
    </Background>
  </View>
    )
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 30,
    margin: 20
  },
  text: {
    fontFamily: 'lexend-regular',
    fontSize: 17,
    color: 'gray',
    padding: 5,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor: Colors.opaque,
    color: 'gray',
    padding: 20,
    width: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    fontFamily: 'lexend-regular',
    marginVertical: 5,
    overflow: 'visible'
  },
  resultsText: {
    fontFamily: 'lexend-regular',
    fontSize: 13,
    color: 'white'
  },
  resultsContainer: {
    borderColor: Colors.opaque,
    borderWidth: 3,
    color: 'gray',
    padding: 20,
    width: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    fontFamily: 'lexend-regular',
    marginVertical: 5,
    overflow: 'visible'
  },
  title: {
    fontFamily: 'lexend-light',
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 15
  },
  displayTime: {
    fontFamily: 'lexend-light',
    color: 'gray',
    fontSize: 30,
    textAlign: 'center',
    margin: 5
  },
  sunCompatibility: {
    backgroundColor: Colors.opaque,
    width: '100%',
    borderRadius: 30,
    alignContent: 'center',
    alignSelf: 'center',
    margin: 0,
    margin: 10,
    padding: 15
  }
})

export default FriendsScreen;