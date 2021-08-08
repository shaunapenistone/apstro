import { USER_FOLLOWING_STATE_CHANGE } from '../actions/userinfo'

const initialState = {
  currentUser: null,
  following: []
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_FOLLOWING_STATE_CHANGE: 
      return {
        ...state, 
        following: action.following
      }
      default: 
        return state;
  }
}