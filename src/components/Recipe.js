import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { isEmpty } from "lodash";
import { loadOneRecipe } from "../actions/recipes";

const mapStateToProps = state => ({
  picked: state.recipes.picked
});

const mapDispatchToProps = dispatch => ({
  loadOneRecipe: id => loadOneRecipe(id)(dispatch)
});

const Recipe = props => {
  const { picked, recipeId, loadOneRecipe } = props;

  // component did mount / component did update
  useEffect(() => {
    if (isEmpty(picked) === true) {
      loadOneRecipe(recipeId);
    }
  }, [picked]);

  return (
    <div>
      <h2>レシピ画面</h2>
      <div>タイトル: {picked.title && picked.title}</div>
      <div>
        投稿者:{" "}
        <Link to={`../../user/${picked.account}`}>{picked.account}</Link>
      </div>
      <div>費用: {picked.cost && picked.cost}円, </div>
      <div>調理時間: {picked.cookTime && picked.cookTime}分</div>
      <div>
        <span>材料: </span>
        {picked.ingredients &&
          picked.ingredients.split(",").map(line => <span>{line} </span>)}
      </div>
      <div>
        <span>手順: </span>
        {picked.directions &&
          picked.directions.split(",").map(line => <span>{line} </span>)}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
