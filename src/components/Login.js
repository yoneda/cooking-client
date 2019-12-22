import React, { useState } from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import { login } from "../actions/common";

const mapStateToProps = state => ({
  message: state.common.loginError
});

const mapDispatchToProps = dispatch => ({
  login: (account, password, successHandler, errorHandler) =>
    login(account, password, successHandler, errorHandler)(dispatch)
});

const Login = props => {
  const { message, login } = props;
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2>ログイン画面</h2>
      <div>
        {message && (
          <div>
            <div style={{ color: "red" }}>{message}</div><br />
          </div>
        )}
      </div>
      <div>
        アカウント: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={account}
          onChange={event => setAccount(event.target.value)}
        />
      </div>
      <div>
        パスワード: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <br />
      <button
        onClick={() => {
          const onSuccess = () => navigate("/");
          const onError = () => {
            setAccount("");
            setPassword("");
          };
          login(account, password, onSuccess, onError);
        }}
      >
        login
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
