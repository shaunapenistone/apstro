import { COMPATIBILITY } from '../actions/compatibility';

const initialState = {

};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMPATIBILITY:
      return {
        aspects: action.aspects
      };
    default:
      return state;
  }
};