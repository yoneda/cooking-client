import { SET_ACCOUNT, LOGIN_ERROR } from "./actionTypes";
import agent from "../agent";

export const login = (
  account,
  password,
  onSuccess,
  onError
) => async dispatch => {
  const errorOccurred = err => {
    dispatch({
      type: LOGIN_ERROR,
      payload: "ユーザ名かパスワードのどちらかが間違っています"
    });
    onError();
  };
  const response = await agent.Auth.login(account, password).catch(errorOccurred);
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
