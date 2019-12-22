import React from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import { useLegacyState } from "../hooks";
import { register } from "../actions/common";

const mapDispatchToProps = dispatch => ({
  register: (account, password, successHandler, errorHandler) =>
    register(account, password, successHandler, errorHandler)(dispatch)
});

const Register = props => {
  const { register } = props;
  const [state, setState] = useLegacyState({
    error: "",
    account: "",
    pass: "",
    checkPass: ""
  });
  return (
    <div>
      <h2>登録画面</h2>
      <div>
        {state.error && (
          <div>
            <div style={{ color: "red" }}>{state.error}</div>
            <br />
          </div>
        )}
      </div>
      <div>
        アカウント: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={state.account}
          onChange={event => setState({ account: event.target.value })}
        />
      </div>
      <div>
        パスワード: <br />
        <input
          type="password"
          style={{ width: "300px" }}
          value={state.pass}
          onChange={event => setState({ pass: event.target.value })}
        />
      </div>
      <div>
        確認用パスワード: <br />
        <input
          type="password"
          style={{ width: "300px" }}
          value={state.checkPass}
          onChange={event => setState({ checkPass: event.target.value })}
        />
      </div>
      <br />
      <button
        onClick={() => {
          const onSuccess = () => navigate("/");
          const onError = () => {
            setState({
              error: "このアカウントは既に登録されています",
              account: "",
              pass: "",
              checkPass: ""
            });
          };
          register(state.account, state.pass, onSuccess, onError);
        }}
      >
        register
      </button>
    </div>
  );
};

export default connect(undefined, mapDispatchToProps)(Register);
