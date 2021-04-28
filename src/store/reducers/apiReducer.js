import { apiActionTypes } from "../actionTypes/apiActionTypes"

const {
  FETCH_RECEPIES_REQUESTED,
  FETCH_RECEPIES_SUCCEEDED,
  FETCH_RECEPIES_FAILED,
} = apiActionTypes
const INITIAL_STATE = {
  recepies: {},
  isLoading: false,
  isError: false,
}

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECEPIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case FETCH_RECEPIES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        recepies: action.payload,
      }
    case FETCH_RECEPIES_FAILED:
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
