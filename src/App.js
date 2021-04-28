import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import HistoryContainer from "./containers/HistoryContainer"
import HomeContainer from "./containers/HomeContainer"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
        </div>

        <Switch>
          <Route path="/history">
            <HistoryContainer />
          </Route>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
