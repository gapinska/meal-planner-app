import { combineReducers } from "redux"
import apiReducer from "./apiReducer"
import historyReducer from "./historyReducer"

const rootReducer = combineReducers({
  apiReducer,
  historyReducer,
})

export default rootReducer
