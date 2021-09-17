import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

import Background from '../../components/Background'
import Header from '../../components/Header';
import BarButton from '../../components/BarButton';
import { bindActionCreators } from 'redux';
import LongButton from '../../components/LongButton';

const ProfileScreen = props => {
  const userId = props.navigation.getParam('uid');

  const [ user, setUser ] = useState({});
  const [ currentUserId, setCurrentUserId ] = useState('');
  const [ isCurrentUser, setIsCurrentUser ] = useState(false)
  const [ image, setImage] = useState(require('../../assets/images/symbols/defaultavi.png'));
  const [ imageLoading, setImageLoading ] = useState(false)

  const getCurrentUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let parsedData = JSON.parse(userData);
    let userUID = parsedData.userId
    setCurrentUserId(userUID)
  }

  getCurrentUserData()

  useEffect(() => {
      firebase.firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setUser(snapshot.data())
        }
      })
    getProfilePicture()
    }, [])

    const getProfilePicture = () => {
      setImageLoading(true)
      firebase.firestore()
      .collection("profilepics")
      .doc(userId)
      .collection("profilePicture")
      .orderBy('creation', 'desc')
      .limit(1)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setImageLoading(require('../../assets/images/symbols/defaultavi.png'))
          setImageLoading(false)
        } else {
          querySnapshot.forEach((doc) => {
            let imageURL = doc.data().downloadURL
            setImage({uri: imageURL})
            setImageLoading(false)
        })}}).catch((error) => {
          console.log(error)
        }
      )
    }

  return (
    <View style={styles.screen}>
      <Background>
        <Header 
          title='Profile Details'
          backButton={true}
          navigateBack={() => {props.navigation.navigate('MyFriends')}}
        />
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.userHeader}>
              {imageLoading ? <ActivityIndicator color='white' size='large'/> : <Image 
                    source={image}
                    style={styles.profilePic}
                  />}
              <View>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.username}>@{user.username}</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <LongButton 
                onPress={() => props.navigation.navigate({
                  routeName: 'SynastryReport',
                  params: {
                    user: user
                  }
                })}
                title="See Compatibility"
              />
            </View>
            <View style={styles.planets}>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/ascendant.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{user.rising} Acendant</Text>
              </View>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/sun.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{user.sun} Sun</Text>
              </View>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/moon.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{user.moon} Moon</Text>
              </View>
              </View>
              <View style={styles.planets}>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/venus.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{user.venus} Venus</Text>
              </View>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/mercury.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{user.mercury} Mercury</Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </Background>
  </View>
    )
};


const styles = StyleSheet.create({
  content: {
    marginHorizontal: 60,
    margin: 60
  },
  text: {
    fontFamily: 'lexend-regular',
    fontSize: 20,
    color: 'gray'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',    
    marginVertical: 15
  },
  planets: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',  
    marginVertical: 30
  },
  planet: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    shadowOpacity: 5,
    shadowColor: 'white',
    shadowRadius: 5,
    shadowOffset: {width: 1, height: 3 },
    overflow: 'visible'
  },
  title: {
    fontFamily: 'lexend-regular',
    fontSize: 30,
    color: 'white'
  },
  username: {
    fontFamily: 'lexend-regular',
    fontSize: 20,
    color: 'white'
  },
  planetCap: {
    fontFamily: 'lexend-regular',
    fontSize: 12,
    color: 'white',
    alignSelf: 'center',  
    margin: 5
  },
  profilePic: {
    height: 155,
    width: 155,
    borderRadius: 100
  },
  userHeader: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
})

export default ProfileScreen;