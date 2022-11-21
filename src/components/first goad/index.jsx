import { Component } from "react";

class Sneakers extends Component {
  render() {
    const { type, name, description, price, quantity } = this.props;
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
export default Sneakers;
