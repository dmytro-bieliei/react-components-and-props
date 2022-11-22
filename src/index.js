import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const sneakers = {
  type: "Athletic shoes",
  name: "Asics",
  description: "for playing volleyball",
  price: "68$",
  quantity: 2,
};

const shoes = {
  type: "Classic shoes",
  name: "Kenneth",
  description: "classic leather shoes",
  price: "48$",
  quantity: 0,
};

function Goods(props) {
  const {
    product: { type, name, description, price, quantity },
  } = props;

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

// root.render(React.createElement(Goods))
root.render(
  <div>
    <Goods product={sneakers} />
    <Goods product={shoes} />
  </div>
);
