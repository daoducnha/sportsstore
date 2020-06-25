import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { SportsStoreDataStore } from "./data/DataStore";
import { BrowserRouter as Router, Route, Switch, Redirect }
from "react-router-dom";
import { ShopConnecter } from "./shop/ShopConnector";


export class App extends Component {
  render() {
    return (
      <Provider store={SportsStoreDataStore}>
        <Router>
          <Switch>
            <Route path="/shop" component={ShopConnecter} />
            <Redirect to='/shop' />          
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
