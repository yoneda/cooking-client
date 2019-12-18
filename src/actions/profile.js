import {
  ME_LOADED,
  FRIEND_LOADED,
  SHOW_LOADING,
  HIDE_LOADING
} from "./actionTypes";
import { postsLoaded, starsLoaded } from "./recipes";
import agent from "../agent";

// MEMO: 冗長すぎるため、action-creatorは省略した

export const loadMyProfile = account => async dispatch => {
  const { user } = await agent.Profile.get(account);
  dispatch({ type: ME_LOADED, payload: user });
};

export const updateMyProfile = account => async dispatch => {
  const { user } = await agent.Profile.edit(account);
  dispatch({ type: ME_LOADED, payload: user });
};

export const loadFriendProfile = account => async dispatch => {
  const { user } = await agent.Profile.get(account);
  dispatch({ type: FRIEND_LOADED, payload: user });
};

export const loadDashboardPage = account => async dispatch => {
  dispatch({ type: SHOW_LOADING });
  const [{ user }, { recipes: stars }, { recipes: posts }] = await Promise.all([
    agent.Profile.get(account),
    agent.Recipes.stared(account),
    agent.Recipes.posted(account)
  ]);
  dispatch({ type: ME_LOADED, payload: user });
  dispatch(postsLoaded(posts));
  dispatch(starsLoaded(stars));
  dispatch({ type: HIDE_LOADING });
};

export const loadFriendPage = account => async dispatch => {
  dispatch({ type: SHOW_LOADING });
  const [{ user }, { recipes: stars }, { recipes: posts }] = await Promise.all([
    agent.Profile.get(account),
    agent.Recipes.stared(account),
    agent.Recipes.posted(account)
  ]);
  dispatch({ type: FRIEND_LOADED, payload: user });
  dispatch(postsLoaded(posts));
  dispatch(starsLoaded(stars));
  dispatch({ type: HIDE_LOADING });
};
