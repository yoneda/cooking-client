import { SET_ACCOUNT } from "./actionTypes";
import { isEmpty } from "lodash";
import agent from "../agent";

export const login = (account, password) => async dispatch => {
  const { user } = await agent.Auth.login(account, password);
  if (!isEmpty(user)) {
    window.localStorage.setItem("jwt", user.token);
    dispatch({ type: SET_ACCOUNT, payload: user.account });
  }
};

export const logout = () => dispatch => {
  window.localStorage.setItem("jwt", "");
  dispatch({ type: SET_ACCOUNT, payload: "" });
};
