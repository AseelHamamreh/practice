import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './compotents/Home';
import Cart from './compotents/Cart';
import Header from './compotents/Header';
export class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#f9f3f3'}}>
        <>
          <Header/>
        </>
        <>
          <Router>
            <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/Cart">
                  <Cart />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      </div>
    );
  }
}

export default App;
