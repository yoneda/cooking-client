import { combineReducers } from "redux";

import profile from "./profile";
import recipes from "./recipes";
import loading from "./loading";
import commom from "./commom";

const rootReducer = combineReducers({
  profile,
  recipes,
  loading,
  commom
});

export default rootReducer;
