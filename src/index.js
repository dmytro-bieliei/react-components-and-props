import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Sneakers = {
  name: "Asics",
  description: "for playing volleyball",
  price: "68$",
  quantity: 2,
}

const Shoes = {
  name: "Kenneth",
  description: "classic leather shoes",
  price: "48$",
  quantity: 0,
}



function Goods(props) {

  return(
    <article>
      <h1>{Sneakers.name}</h1>
      <p>{Sneakers.description}</p>
      <p>{Sneakers.price}</p>
    </article>
  )
}

root.render(<Goods />)