import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, } from 'react-native';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/actions/auth';
import * as ImagePicker from 'expo-image-picker';

import Background from '../../components/Background'
import Header from '../../components/Header';
import LongButton from '../../components/LongButton';

const MyProfileScreen = props => {
  const [ userData, setUserData ] = useState({});
  const [ userUID, setUserUID ] = useState('false');
  const [ loading, setLoading ] = useState(true);
  const [ image, setImage] = useState(require('../../assets/images/symbols/defaultavi.png'));
  const [ imageLoading, setImageLoading ] = useState(false)

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let parsedData = JSON.parse(userData);
    let userId = parsedData.userId
    setUserUID(userId)
  }

  getUserData()
  
  useEffect(() => {
    firebase.firestore()
    .collection("users")
    .doc(userUID)
    .get()
    .then((snapshot) => {
      if (snapshot.exists) {
        setUserData(snapshot.data())
        setLoading(false)
      } 
    })

    getProfilePicture()
  }, [userUID])

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    uploadImage(result.uri);

  };

  const uploadImage = async (uri) => {
    setImageLoading(true)
    const response = await fetch(uri);
    const blob = await response.blob();
    const childPath = `profilepics/${userUID}/${Math.random().toString(36)}`

    firebase
    .storage()
    .ref()
    .child(childPath)
    .put(blob)
    .then((snapshot) => {
      snapshot.ref.getDownloadURL().then((snapshot) => {
        savePictureData(snapshot)
        setImage({uri: snapshot})
      })
    }
    )
    getProfilePicture()

    const savePictureData = (downloadURL) => {
      firebase.firestore()
      .collection("profilepics")
      .doc(userUID)
      .collection("profilePicture")
      .add({
        downloadURL,
        creation: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }

  const getProfilePicture = () => {
    setImageLoading(true)
    firebase.firestore()
    .collection("profilepics")
    .doc(userUID)
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
          title='My Profile'
        />
        <ScrollView>
        {loading ? <ActivityIndicator color='white' size='large'/> :
          <View style={styles.content}>
            <View  style={styles.userHeader}>
              {imageLoading ? <ActivityIndicator color='white' size='large'/> : <Image 
                source={image}
                style={styles.profilePic}
              />}
              <View style={styles.userTags}>
                <Text style={styles.title}>{userData.name}</Text>
                <Text style={styles.username}>@{userData.username}</Text>
              </View>
            </View>
            <View style={styles.planets}>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/ascendant.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{userData.rising} Rising</Text>
              </View>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/sun.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{userData.sun} Sun</Text>
              </View>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/moon.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{userData.moon} Moon</Text>
              </View>
              </View>
              <View style={styles.planets}>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/venus.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{userData.venus} Venus</Text>
              </View>
              <View>
                <Image 
                  source={require('../../assets/images/symbols/mercury.png')}
                  style={styles.planet}
                />
                <Text style={styles.planetCap}>{userData.mercury} Mercury</Text>
              </View>
            </View>
            </View> }
            <LongButton 
                title='Log Out' 
                onPress={() => {
                  AsyncStorage.removeItem('userData');
                  AsyncStorage.removeItem('natalData');
                  firebase.auth().signOut()
                    .then(props.navigation.navigate('Auth'))
                    .catch((error) => alert.Alert('An error happened', error.message))
                }}
              />
            <LongButton 
                title='Change Profile Picture' 
                onPress={pickImage}
              />
      </ScrollView>
    </Background>
  </View>
  )
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 60,
  },
  text: {
    fontFamily: 'lexend-regular',
    fontSize: 20,
    color: 'gray',
    textAlign: 'center'
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
    shadowOpacity: 7,
    shadowColor: 'white',
    shadowRadius: 7,
    shadowOffset: {width: 1, height: 3 },
    overflow: 'visible'
  },
  title: {
    fontFamily: 'lexend-regular',
    fontSize: 25,
    color: 'white'
  },
  username: {
    fontFamily: 'lexend-regular',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  },
  planetCap: {
    fontFamily: 'lexend-regular',
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',  
    padding: 5,
  },
  profilePic: {
    height: 165,
    width: 165,
    borderRadius: 100,
  },
  userHeader: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  userTags: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 10
  }
})

export default MyProfileScreen;