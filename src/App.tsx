import React from "react";
import "./App.css";
import CardList from "./components/Card-list/card-list";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Detail } from "./pages/detail/detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CardList />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
