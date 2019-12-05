import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { loadProfile, updateProfile } from "../actions/profile";

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  loadProfile: account => loadProfile(account)(dispatch),
  updateProfile: (account, profile) => updateProfile(account, profile)(dispatch)
  // TODO: 上記は冗長なのでシンプルにかけてかつわかりやすいライブラリがないか探す
});

const Settings = props => {
  const { loadProfile, updateProfile } = props;
  const currentProfile = props.profile;

  // constructor
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  // component did mount
  useEffect(() => {
    loadProfile("smatsuoka");
  }, []);

  // component did update
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current === true) {
      setName(currentProfile.name);
      setBio(currentProfile.bio);
      setMail(currentProfile.mail);
      setPassword(currentProfile.password);
    } else mounted.current = true;
  }, [currentProfile]);

  return (
    <div>
      <h2>設定画面</h2>
      <div>
        名前: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div>
        自己紹介: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={bio}
          onChange={event => setBio(event.target.value)}
        />
      </div>
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
      <button
        onClick={() =>
          updateProfile("smatsuoka", { name, bio, mail, password })
        }
      >
        save
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
