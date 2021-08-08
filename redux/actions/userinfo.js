export const FETCHUSERFOLLOWING = 'FETCHUSERFOLLOWING';

import AsyncStorage from '@react-native-community/async-storage';

export const fetchUserFollowing = () => {
  const [ userId, setUserId ] = useState();

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let parsedData = JSON.parse(userData);
    let userId = parsedData.userId
    setUserId(userId)
  }
  getUserData()

  return((dispatch) => {
    firebase.firestore()
      .collection('friends')
      .doc(userId)
      .collection('friends')
      .onSnapshot((snapshot) => {
        let following = snapshot.docs.map(data)
          const id = doc.id;
          return { id }
      })
      dispatch({ type: USER_FOLLOWING_STATE_CHANGE, following })
  })
}