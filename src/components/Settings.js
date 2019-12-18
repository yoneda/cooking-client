import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { loadMyProfile, updateMyProfile } from "../actions/profile";

const mapStateToProps = state => ({
  profile: state.profile.me
});

const mapDispatchToProps = dispatch => ({
  loadProfile: account => loadMyProfile(account)(dispatch),
  updateProfile: (account, profile) =>
    updateMyProfile(account, profile)(dispatch)
  // TODO: 上記は冗長なのでシンプルにかけてかつわかりやすいライブラリがないか探す
});

const Settings = props => {
  const { loadProfile, updateProfile, profile } = props;

  // constructor
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [mail, setMail] = useState(profile.mail);
  const [password, setPassword] = useState(profile.password);

  // component did mount
  useEffect(() => {
    if (isEmpty(profile)) loadProfile("smatsuoka");
  }, []);

  // component did update
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current === true) {
      setName(profile.name);
      setBio(profile.bio);
      setMail(profile.mail);
      setPassword(profile.password);
    } else mounted.current = true;
  }, [profile]);

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
