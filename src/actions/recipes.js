import {
  RECIPES_LOADED,
  STARS_LOADED,
  POSTS_LOADED,
  PICK_RECIPE
} from "./actionTypes";
import agent from "../agent";

export const recipesLoaded = payload => ({
  type: RECIPES_LOADED,
  payload
});

export const starsLoaded = payload => ({
  type: STARS_LOADED,
  payload
});

export const postsLoaded = payload => ({
  type: POSTS_LOADED,
  payload
});

export const pickRecipe = payload => ({
  type: PICK_RECIPE,
  payload
})

export const loadRecipes = () => async dispatch => {
  const { recipes } = await agent.Recipes.all();
  dispatch(recipesLoaded(recipes));
};

export const loadStars = account => async dispatch => {
  const { recipes } = await agent.Recipes.stared(account);
  dispatch(starsLoaded(recipes));
};

export const loadPosts = account => async dispatch => {
  const { recipes } = await agent.Recipes.posted(account);
  dispatch(postsLoaded(recipes));
};

export const createRecipe = async recipe => {
  const created = await agent.Recipes.create(recipe);
  return created;
}