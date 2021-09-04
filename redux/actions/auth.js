import AsyncStorage from '@react-native-community/async-storage'

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (userId, token) => {
  return dispatch => {
    dispatch({ type: authenticate, userId: userId, token: token });
  }
}

export const logout = () => {
  AsyncStorage.removeItem('userData');
  AsyncStorage.removeItem('natalData');
  return { type: LOGOUT };
}
