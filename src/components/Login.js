import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/common";

const mapDispatchToProps = dispatch => ({
  login: (account, password) => login(account, password)(dispatch)
});

const Login = props => {
  const { login } = props;
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2>ログイン画面</h2>
      <div>
        メール: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={mail}
          onChange={event => setMail(event.target.value)}
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
      <button onClick={() => console.log("ユーザ登録リクエストを送る")}>
        login
      </button>
    </div>
  );
};

export default connect(undefined, mapDispatchToProps)(Login);
