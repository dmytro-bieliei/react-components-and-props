import React from "react";
import { Component } from "react";

class ClassGoods extends Component {
  render() {
    const {
      product: { type, name, description, price, quantity },
    } = this.props;
    return (
      <article>
        <h1>{type}</h1>
        <p>Brand: {name}</p>
        <p>Purpose: {description}</p>
        <p>Price: {price}</p>
        <p>In stock: {quantity}</p>
      </article>
    );
  }
}
export default ClassGoods;
