import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { isEmpty } from "lodash";
import { loadFriendPage } from "../actions/profile";
import { pickRecipe } from "../actions/recipes";

const mapStateToProps = state => ({
  profile: state.profile.friend,
  posts: state.recipes.posts,
  stars: state.recipes.stars,
  isLoading: state.loading.page
});

const mapDispatchToProps = dispatch => ({
  loadFriend: account => loadFriendPage(account)(dispatch),
  pickRecipe: recipe => dispatch(pickRecipe(recipe))
});

const Friend = props => {
  const {
    account,
    posts,
    stars,
    profile,
    isLoading,
    loadFriend,
    pickRecipe
  } = props;
  const { name, bio } = props.profile;

  useEffect(() => {
    if (isEmpty(profile) || profile.account !== account) loadFriend(account);
  }, [profile]);

  const render = (
    <div>
      <div>名前: {name}</div>
      <div>自己紹介: {bio}</div>
      <div>
        <span>投稿したレシピ: </span>
        {posts.map((post, index) => (
          <div key={index}>
            <Link to={`/recipe/${post.id}`} onClick={() => pickRecipe(post)}>
              {post.title}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <span>お気に入りしたレシピ: </span>
        {stars.map((star, index) => (
          <div key={index}>
            <Link to={`/recipe/${star.id}`} onClick={() => pickRecipe(star)}>
              {star.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h2>ユーザページ画面</h2>
      {isLoading ? <div>loading…</div> : render}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Friend);
