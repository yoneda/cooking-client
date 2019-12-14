import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadRecipes, pickRecipe } from "../actions/recipes";
import { Link } from "@reach/router";

const mapStateToProps = state => ({
  arrivals: state.recipes.arrivals
});

const mapDispatchToProps = dispatch => ({
  loadRecipes: () => loadRecipes()(dispatch),
  pickRecipe: recipe => dispatch(pickRecipe(recipe))
});

const Home = props => {
  const { arrivals, loadRecipes, pickRecipe } = props;

  useEffect(() => {
    if (arrivals.length === 0) loadRecipes();
  }, [arrivals]);

  const isLoading = arrivals.length <= 0;

  return (
    <div>
      <h2>ホーム画面</h2>
      <div>
        <div>新着: </div>
        {isLoading ? (
          <div>loading…</div>
        ) : (
          arrivals.map((recipe, index) => (
            <div>
              <Link
                key={index}
                to={`recipe/${recipe.id}`}
                onClick={() => pickRecipe(recipe)}
              >
                {recipe.title}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
