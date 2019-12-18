import React from "react";
import Home from "./Home";
import Editor from "./Editor";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Register from "./Register";
import Login from "./Login";
import Recipe from "./Recipe";
import User from "./User";
import { Router, Link } from "@reach/router";

const App = () => (
  <div>
    <nav>
      <Link to="/">ホーム</Link> |{"" }
      <Link to="editor">新規投稿</Link> |{" "}
      <Link to="dashboard">マイページ</Link> |{" "}
      <Link to="settings">設定</Link> |{" "}
      <Link to="register">登録</Link> |{" "}
      <Link to="login">ログイン</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Editor path="editor" />
      <Dashboard path="dashboard" />
      <Settings path="settings" />
      <Register path="register" />
      <Login path="login" />
      <Recipe path="recipe/:recipeId" />
      <User path="user/:account" />
    </Router>
  </div>
);

export default App;
