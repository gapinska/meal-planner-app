import { apiActionTypes } from "../actionTypes/apiActionTypes"

const {
  FETCH_RECIPES_REQUESTED,
  FETCH_RECIPES_SUCCEEDED,
  FETCH_RECIPES_FAILED,
} = apiActionTypes
const INITIAL_STATE = {
  RECIPES: {},
  isLoading: false,
  isError: false,
}

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case FETCH_RECIPES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        RECIPES: action.payload,
      }
    case FETCH_RECIPES_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

export default apiReducer
