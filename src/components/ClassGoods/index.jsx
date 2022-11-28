import React from "react";
import { Component } from "react";

class ClassGoods extends Component {
  render() {
    const {
      product: { type, name, description, price, quantity },
    } = this.props;
    return (
      <article>
        <h1>{type||"type not cpecified"}</h1>
        <p>Brand: {name||"no brand information"}</p>
        <p>Purpose: {description||"no good description"}</p>
        <p>Price: {price||"no price information"}</p>
        <p>In stock: {quantity||"not available"}</p>
      </article>
    );
  }
}
export default ClassGoods;
