import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadRecipes, pickRecipe } from "../actions/recipes";
import { Link } from "@reach/router";

const mapStateToProps = state => ({
  arrivals: state.recipes.arrivals,
  isLoading: state.loading.page
});

const mapDispatchToProps = dispatch => ({
  loadRecipes: () => loadRecipes()(dispatch),
  pickRecipe: recipe => dispatch(pickRecipe(recipe))
});

const Home = props => {
  const { arrivals, isLoading, loadRecipes, pickRecipe } = props;

  useEffect(() => {
    if (arrivals.length === 0) loadRecipes();
  }, [arrivals]);

  const render = arrivals.map((recipe, index) => (
    <div key={index}>
      <Link to={`recipe/${recipe.id}`} onClick={() => pickRecipe(recipe)}>
        {recipe.title}
      </Link>
    </div>
  ));

  return (
    <div>
      <h2>ホーム画面</h2>
      <div>
        {isLoading ? (
          <div>loading</div>
        ) : (
          <div>
            <div>新着: </div>
            {render}
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
