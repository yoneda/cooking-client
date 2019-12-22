import { SET_ACCOUNT } from "./actionTypes";
import agent from "../agent";

export const login = (
  account,
  password,
  onSuccess,
  onError
) => async dispatch => {
  const response = await agent.Auth.login(account, password).catch(error=>onError());
  if (response) {
    window.localStorage.setItem("jwt", response.user.token);
    dispatch({ type: SET_ACCOUNT, payload: response.user.account });
    onSuccess();
  }
};

export const logout = () => dispatch => {
  window.localStorage.setItem("jwt", "");
  dispatch({ type: SET_ACCOUNT, payload: "" });
};
