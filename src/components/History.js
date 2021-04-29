import React from "react"

const History = ({ history }) => {
  return (
    <div>
      <div>History of your choices:</div>
      {!history ? (
        <div>You have not picked anythink yet.</div>
      ) : (
        <div>
          {history.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default History
