import {
  SET_ACCOUNT,
  LOGIN_ERROR,
  REGISTER_ERROR
} from "../actions/actionTypes";

const initialState = {
  currentAccount: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
