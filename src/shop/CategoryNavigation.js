import React, { Component } from "react";
import { ToggleLink } from "../ToggleLink";

export class CategoryNavigation extends Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <ToggleLink to={`${this.props.baseUrl}/all`} exact={false}>
          All
        </ToggleLink>
        {this.props.categories &&
          this.props.categories.map((cat) => (
            <ToggleLink              
              to={`${this.props.baseUrl}/${cat.toLowerCase()}`}
            >
              {cat}
            </ToggleLink>
          ))}
      </React.Fragment>
    );
  }
}
