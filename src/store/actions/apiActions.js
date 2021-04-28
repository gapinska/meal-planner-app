import apiActionTypes from "../actionTypes/apiActionTypes"
const {
  FETCH_RECIPES_REQUESTED,
  FETCH_RECIPES_SUCCEEDED,
  FETCH_RECIPES_FAILED,
} = apiActionTypes

export const fetchRecipesrequested = () => ({
  type: FETCH_RECIPES_REQUESTED,
})

export const fetchRecipesSucceeded = (data) => ({
  type: FETCH_RECIPES_SUCCEEDED,
  payload: data,
})

export const fetchRecipesFailed = () => ({
  type: FETCH_RECIPES_FAILED,
})
