import apiActionTypes from "../actionTypes/apiActionTypes"
const {
  FETCH_RECEPIES_REQUESTED,
  FETCH_RECEPIES_SUCCEEDED,
  FETCH_RECEPIES_FAILED,
} = apiActionTypes

export const fetchRecepiesrequested = () => ({
  type: FETCH_RECEPIES_REQUESTED,
})

export const fetchRecepiesSucceeded = (data) => ({
  type: FETCH_RECEPIES_SUCCEEDED,
  payload: data,
})

export const fetchRecepiesFailed = () => ({
  type: FETCH_RECEPIES_FAILED,
})
