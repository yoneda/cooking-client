import { combineReducers } from "redux";

import profile from "./profile";
import recipes from "./recipes";
import loading from "./loading";
import common from "./common";

const rootReducer = combineReducers({
  profile,
  recipes,
  loading,
  common
});

export default rootReducer;
