import React, { Component } from "react";
import { Link } from "react-router-dom";
import {CartDetailRows} from "./CartDetailRows";

export class CartDetails extends Component {
  getLinkClasses = () => `btn btn-secondary m-1
    ${this.props.cartItems === 0 ? "disabled" : " "}`;

  render() {
    return (
      <div className="m-3">
        <h2 className="text-center">Your Cart</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <tr>Quantity</tr>
              <tr>Product</tr>
              <tr className="text-right">Price</tr>
              <th className="text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <CartDetailRows
              cart={this.props.cart}
              cartPrice={this.props.cartPrice}
              updateQuantity={this.props.updateCartQuantity}
              removeFromCart={this.props.removeFromCart}
            />
          </tbody>
        </table>
        <div className="text-center">
          <Link className="btn btn-primary m-1" to="/shop">
            Continue Shopping
          </Link>
          <Link className={this.getLinkClasses()} to="/shop/checkout">
            Checkout
          </Link>
        </div>
      </div>
    );
  }
}
