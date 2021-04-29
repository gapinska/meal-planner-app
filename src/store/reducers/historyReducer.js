import { SET_HISTORY } from "../actionTypes/historyActionTypes"

const INITIAL_STATE = []

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return [...state, action.payload]
    default:
      return state
  }
}

export default historyReducer
