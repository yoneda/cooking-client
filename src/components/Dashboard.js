import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { isEmpty } from "lodash";
import { loadMyProfile } from "../actions/profile";
import { loadStars, loadPosts, pickRecipe } from "../actions/recipes";

const mapStateToProps = state => ({
  profile: state.profile.me,
  posts: state.recipes.posts,
  stars: state.recipes.stars
});

const mapDispatchToProps = dispatch => ({
  loadProfile: account => loadMyProfile(account)(dispatch),
  loadStars: account => loadStars(account)(dispatch),
  loadPosts: account => loadPosts(account)(dispatch),
  pickRecipe: recipe => dispatch(pickRecipe(recipe))
});

const Dashboard = props => {
  const { posts, stars, profile, loadProfile, loadStars, loadPosts, pickRecipe} = props;
  const { name, bio } = props.profile;

  useEffect(() => {
    if (isEmpty(profile)) loadProfile("smatsuoka");
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
