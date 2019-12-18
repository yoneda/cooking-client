import agent from "../agent";
import { SHOW_LOADING, HIDE_LOADING } from "./actionTypes";
import { receiveProfile } from "./profile";
import { postsLoaded, starsLoaded } from "./recipes";

export const load = account => async dispatch => {
  dispatch({ type: SHOW_LOADING });
  const [user, stars, posts] = await Promise.all([
    agent.Profile.get(account),
    agent.Recipes.stared(account),
    agent.Recipes.posted(account)
  ]);
  dispatch(receiveProfile(user));
  dispatch(postsLoaded(posts));
  dispatch(starsLoaded(stars));
  dispatch({ type: HIDE_LOADING });
  console.log(values);
};
