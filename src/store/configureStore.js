import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "../store/reducers/rootReducer"

const middleware = [reduxThunk]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
