import { SET_ACCOUNT } from "../actions/actionTypes";

const initialState = {
  correntAccount: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      console.log(action);
      return {
        ...state,
        correntAccount: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
