import { Component } from "react";

class Sneakers extends Component {
  render() {
    const { goads: name, description, price, quantity } = this.props;
    return (
      <article>
        <h3>Name{name}</h3>
        <p>Description{description}</p>
        <p>Price{price}</p>
        <p>Quantity{quantity}</p>
      </article>
    );
  }
}
export default Sneakers;
