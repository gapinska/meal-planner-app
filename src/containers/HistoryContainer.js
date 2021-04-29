import React from "react"
import { useDispatch, useSelector } from "react-redux"
import History from "../components/History"

const HistoryContainer = () => {
  const history = useSelector((state) => state.historyReducer)
  return <History history={history} />
}

export default HistoryContainer
