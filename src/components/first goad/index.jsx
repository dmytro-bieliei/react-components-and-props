 import { Component } from "react";

 class Sneakers extends Component {
  render() {
    const { name, description, price, quantity } = this.props;
    return ( 
      <article>
        <h3>Name</h3>
        <p>Description</p>
        <p>Price</p>
        <p>Amount</p>
      </article>
    )
  }
 }
