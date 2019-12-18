import { SHOW_LOADING, HIDE_LOADING } from "../actions/actionTypes";

const initialState = {
  page: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, page: true };
    case HIDE_LOADING:
      return { ...state, page: false };
    default:
      return state;
  }
};

export default reducer;
