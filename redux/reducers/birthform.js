import { BIRTHFORM } from '../actions/birthform';

const initialState = {
  profile: {},
  planets: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BIRTHFORM: 
      return {
        profile: action.profile
      }
    case CLEARDATA: 
      return initialState
    default:
      return state;
  }
};