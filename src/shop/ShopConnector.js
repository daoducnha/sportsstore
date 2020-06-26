import { loadData, placeOrder } from "../data/ActionCreators";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Shop } from "./Shop";
import { DataTypes } from "../data/Type";
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} from "../data/CartActionCreators";
import { CartDetails } from "./CartDetails";
import { DataGetter } from "../data/DataGetter";
import { Checkout } from "./Chekout";
import { Thanks } from "./Thanks";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  placeOrder,
};

export const ShopConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Redirect
            from="/shop/products/:category"
            to="/shop/products/:category/1"
            exact={true}
          />
          <Route
            path={"/shop/products/:category/:page"}
            render={(routeProps) => (
              <DataGetter {...this.props} {...routeProps}>
                <Shop {...this.props} {...routeProps} />
              </DataGetter>
            )}
          />
          <Route
            path="/shop/cart"
            render={(routeProps) => (
              <CartDetails {...this.props} {...routeProps} />
            )}
          />
          <Route
            path="/shop/checkout"
            render={(routeProps) => (
              <Checkout {...this.props} {...routeProps} />
            )}
          />
          <Route
            path="/shop/thanks"
            render={(routeProps) => <Thanks {...this.props} {...routeProps} />}
          />
          <Redirect to="/shop/products/all/1" />
        </Switch>
      );
    }
    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
      //this.props.loadData(DataTypes.PRODUCTS);
    }
  }
);
