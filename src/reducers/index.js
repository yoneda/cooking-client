import { combineReducers } from "redux";

import profile from "./profile";
import recipes from "./recipes";
import loading from "./loading";

const rootReducer = combineReducers({
  profile,
  recipes,
  loading
})

export default rootReducer;