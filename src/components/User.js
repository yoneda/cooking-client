import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { isEmpty } from "lodash";
import { loadFriendProfile } from "../actions/profile";
import { loadStars, loadPosts, pickRecipe } from "../actions/recipes";

const mapStateToProps = state => ({
  profile: state.profile.friend,
  posts: state.recipes.posts,
  stars: state.recipes.stars
});

const mapDispatchToProps = dispatch => ({
  loadProfile: account => loadFriendProfile(account)(dispatch),
  loadStars: account => loadStars(account)(dispatch),
  loadPosts: account => loadPosts(account)(dispatch),
  pickRecipe: recipe => dispatch(pickRecipe(recipe))
});

const User = props => {
  const {
    account,
    posts,
    stars,
    profile,
    loadProfile,
    loadStars,
    loadPosts,
    pickRecipe
  } = props;
  const { name, bio } = props.profile;

  useEffect(() => {
    if (isEmpty(profile)) loadProfile(account);
  }, [profile]);

  useEffect(() => {
    if (stars.length === 0) loadStars(account);
  }, [stars]);

  useEffect(() => {
    if (posts.length === 0) loadPosts(account);
  }, [posts]);

  return (
    <div>
      <h2>ユーザページ画面</h2>
      <div>名前: {name}</div>
      <div>自己紹介: {bio}</div>
      <div>
        <span>投稿したレシピ: </span>
        {posts.map((post, index) => (
          <div key={index}>
            <Link to={`../recipe/${post.id}`} onClick={() => pickRecipe(post)}>
              {post.title}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <span>お気に入りしたレシピ: </span>
        {stars.map((star, index) => (
          <div key={index}>
            <Link to={`../recipe/${star.id}`} onClick={() => pickRecipe(star)}>
              {star.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
