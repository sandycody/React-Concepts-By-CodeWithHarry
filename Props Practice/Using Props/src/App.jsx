import './App.css';
import Empty from './components/Empty';
import Item from './components/Item';

// let items = [];
let items = ["Oil", "Ice-Cream", "Charger", "Clothes", "Lights", "Toy", "Notebook"];

function App() {

  return (
    <>
      <h1>Shop Items</h1>

      {/* Conditional Rendering */}
      {/* { items.length === 0 ? <h2>Shop is Empty</h2> : null } */}

      {/* OR */}

      {/* This means if items.length === 0 is true, it renders the <h4> element; if false, it renders nothing. */}

      <Empty item={items} />

      <Item item={items} />
    </>
  )
}

export default App;
