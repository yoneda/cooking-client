import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { loadProfile } from "../actions/profile";
import { loadStars, loadPosts, pickRecipe } from "../actions/recipes";

const mapStateToProps = state => ({
  profile: state.profile,
  posts: state.recipes.posts,
  stars: state.recipes.stars
});

const mapDispatchToProps = dispatch => ({
  loadProfile: account => loadProfile(account)(dispatch),
  loadStars: account => loadStars(account)(dispatch),
  loadPosts: account => loadPosts(account)(dispatch),
  pickRecipe: recipe => dispatch(pickRecipe(recipe))
});

const User = props => {
  const { posts, stars, loadProfile, loadStars, loadPosts, pickRecipe} = props;
  const { name, bio } = props.profile;

  useEffect(() => {
    if (props.profile.name === "") loadProfile("smatsuoka");
  }, [props.profile]);

  useEffect(() => {
    if (stars.length === 0) loadStars("smatsuoka");
  }, [stars]);

  useEffect(() => {
    if (posts.length === 0) loadPosts("smatsuoka");
  }, [posts]);

  return (
    <div>
      <h2>マイページ画面</h2>
      <div>名前: {name}</div>
      <div>自己紹介: {bio}</div>
      <div>
        <span>投稿したレシピ: </span>
        {posts.map((post, index) => (
          <div>
            <Link
              key={index}
              to={`../recipe/${post.id}`}
              onClick={() => pickRecipe(post)}
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <span>お気に入りしたレシピ: </span>
        {stars.map((star,index) => (
          <div>
          <Link
            key={index}
            to={`../recipe/${star.id}`}
            onClick={() => pickRecipe(star)}
          >
            {star.title}
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
