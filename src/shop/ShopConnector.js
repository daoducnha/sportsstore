import { loadData } from "../data/ActionCreators";
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

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
};

const filterProducts = (products = [], category) =>
  !category || category === "All"
    ? products
    : products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );

export const ShopConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Route
            path="/shop/products/:category?"
            render={(routeProps) => (
              <Shop
                {...this.props}
                {...routeProps}
                products={filterProducts(
                  this.props.products,
                  routeProps.match.params.category
                )}
              />
            )}
          />
          <Route
            path="/shop/cart"
            render={(routeProps) => (
              <CartDetails {...this.props} {...routeProps} />
            )}
          />
          <Redirect to="/shop/products" />
        </Switch>
      );
    }

    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
      this.props.loadData(DataTypes.PRODUCTS);
    }
  }
);
