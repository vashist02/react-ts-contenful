import React from 'react';
import './styles/App.scss';
import { Header } from './common/header/header';
import { Footer } from './common/footer/footer';
import { CardList } from './components/card-list/card-list';
import { Detail } from './pages/item-detail/item-detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(): React.ReactElement {
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

          {/* <Route path="*" component={Header} />  // TODO Implement not found error page */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
