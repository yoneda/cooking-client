import React, { useState } from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router"
import { login } from "../actions/common";

const mapDispatchToProps = dispatch => ({
  login: (account, password, successHandler) => login(account, password, successHandler)(dispatch)
});

const Login = props => {
  const { login } = props;
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2>ログイン画面</h2>
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
      <button onClick={() => {
        const onSuccess = () => navigate("/");
        login(account,password,onSuccess);
      }}>
        login
      </button>
    </div>
  );
};

export default connect(undefined, mapDispatchToProps)(Login);
