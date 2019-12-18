import { ME_LOADED, FRIEND_LOADED } from "../actions/actionTypes";

const initialState = {
  me: {},
  friend: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ME_LOADED:
      return {...state, me: action.payload};
    case FRIEND_LOADED:
      return {...state, friend: action.payload};
    default:
      return state;
  }
};

export default reducer;
