import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { isEmpty } from "lodash";
import { loadDashboardPage } from "../actions/profile";
import { pickRecipe } from "../actions/recipes";

const mapStateToProps = state => ({
  account: state.common.currentAccount,
  profile: state.profile.me,
  posts: state.recipes.posts,
  stars: state.recipes.stars,
  isLoading: state.loading.page
});

const mapDispatchToProps = dispatch => ({
  loadDashboard: account => loadDashboardPage(account)(dispatch),
  pickRecipe: recipe => dispatch(pickRecipe(recipe))
});

const Dashboard = props => {
  const { account, posts, stars, profile, isLoading, loadDashboard, pickRecipe } = props;
  const { name, bio } = props.profile;

  useEffect(() => {
    if (isEmpty(profile)) loadDashboard(account);
  }, [profile]);

  const render = (
    <div>
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

  return (
    <div>
      <h2>マイページ画面</h2>
      {isLoading ? <div>loading…</div> : render}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
