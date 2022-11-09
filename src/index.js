import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const goods = {
  name: "Sneakers",
  description: "for playing volleyball",
  price: "68$",
}

function Goods(props) {
  return(
    <article>
      <h1>{goods.name}</h1>
      <p>{goods.description}</p>
      <p>{goods.price}</p>
    </article>
  )
}

root.render(<Goods />)