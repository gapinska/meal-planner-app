import {
  fetchRecipesRequested,
  fetchRecipesSucceeded,
  fetchRecipesFailed,
} from "../store/actions/apiActions"

export const fetchRecipes = (url) => {
  return (dispatch) => {
    dispatch(fetchRecipesRequested())
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(fetchRecipesSucceeded(data)))
      .catch((error) => dispatch(fetchRecipesFailed()))
  }
}
