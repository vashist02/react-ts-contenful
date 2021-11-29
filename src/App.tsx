import React from 'react';
import './styles/App.scss';
import { Header } from './components/header/header';
import { CardList } from './components/card-list/card-list';
import { Detail } from './pages/item-detail/item-detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <CardList />
          </Route>
          <Route path="/detail/:path">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
