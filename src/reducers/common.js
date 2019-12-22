import {
  SET_ACCOUNT,
  LOGIN_ERROR,
  REGISTER_ERROR
} from "../actions/actionTypes";

const initialState = {
  currentAccount: "",
  loginError: "",
  registerError: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
