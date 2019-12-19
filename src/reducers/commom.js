import { LOGIN, REGISTER, LOGOUT } from "../actions/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
    case LOGOUT:
    default:
      return state;
  }
};

export default reducer;
