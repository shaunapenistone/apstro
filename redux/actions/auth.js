import AsyncStorage from '@react-native-community/async-storage'

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (userId, token) => {
  return dispatch => {
    dispatch({ type: authenticate, userId: userId, token: token });
  }
}


export const signup = (email, password) => {
  return async dispatch => {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjF9zMs2ciV33zaVY_fw_pmmNMVCcSLec', 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true
            })
          }
        );
        if (!response.ok) {
          const errorResData = await response.json();
          const errorId = errorResData.error.message
          let message = 'Something went wrong...';
          if (errorId === 'EMAIL_EXISTS') {
            message = "This email is already registered, please log in"
          } 
          throw new Error(message)
        }
        const resData = await response.json();
        console.log(resData)
        dispatch(
          authenticate(
            resData.localId, 
            resData.idToken
          )
        );
        saveDataToStorage(resData.idToken, resData.localId);
}};


export const login = (email, password) => {
  return async dispatch => {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjF9zMs2ciV33zaVY_fw_pmmNMVCcSLec', 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true
            })
          }
        );
        if (!response.ok) {
          const errorResData = await response.json();
          const errorId = errorResData.error.message
          let message = 'Something went wrong...'

          if (errorId === 'EMAIL_NOT_FOUND') {
            message = "This email couldn't be found, please sign up"
          } else if (errorId === 'INVALID_PASSWORD') {
            message = "This password is incorrect"
          } 
          console.log(Error)
          throw new Error(message)

        }
        const resData = await response.json();

        dispatch((
          authenticate(
            resData.localId, 
            resData.idToken
          )
        ));
        
        saveDataToStorage(resData.idToken, resData.localId);
  }
};

export const logout = () => {
  AsyncStorage.removeItem('userData');
  return { type: LOGOUT };
}

const saveDataToStorage = (token, userId,) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId
    })
  );
};


