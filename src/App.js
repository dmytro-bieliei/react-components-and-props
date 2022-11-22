import "./App.css";
import ClassGoods from "./components/first goad";

// class App extends React.Component {
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

function App() {
  return (
    <div>
      <article>
        <ClassGoods product={sneakers} />
      </article>
      <article>
        <ClassGoods product={shoes} />
      </article>
    </div>
  );
}

export default App;
