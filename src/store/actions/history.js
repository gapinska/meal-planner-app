import { SET_HISTORY } from "../actionTypes/historyActionTypes"

export const setHistory = (data) => ({
  type: SET_HISTORY,
  payload: data,
})
