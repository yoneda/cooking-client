import { ME_LOADED, FRIEND_LOADED } from "./actionTypes";
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

export const  loadFriendProfile = account => async dispatch => {
  const { user } = await agent.Profile.get(account);
  dispatch({ type: FRIEND_LOADED, payload: user });
}

