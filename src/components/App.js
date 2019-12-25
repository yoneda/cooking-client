import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import Editor from "./Editor";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Register from "./Register";
import Login from "./Login";
import Recipe from "./Recipe";
import Friend from "./Friend";
import { Router, Link, navigate } from "@reach/router";
import { logout } from "../actions/common";

const LoginedNav = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="editor">New</Link> |{" "}
    <Link to="dashboard">Dashboard</Link> | <Link to="settings">Setting</Link>
  </nav>
);

const AnyOneNav = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="register">Register</Link> |{" "}
    <Link to="login">Login</Link>
  </nav>
);

const App = () => {
  const account = useSelector(state => state.common.currentAccount);
  const dispatch = useDispatch();

  return (
    <div>
      {account ? <LoginedNav /> : <AnyOneNav />}
      {account && (
        <div>
          ログイン中: {account}
          <br />{" "}
          <button
            onClick={() => {
              logout()(dispatch);
              navigate("/");
            }}
          >
            logout
          </button>
        </div>
      )}
      <Router>
        <Home path="/" />
        <Editor path="editor" />
        <Dashboard path="dashboard" />
        <Settings path="settings" />
        <Register path="register" />
        <Login path="login" />
        <Recipe path="recipe/:recipeId" />
        <Friend path="user/:account" />
      </Router>
    </div>
  );
};

export default App;
