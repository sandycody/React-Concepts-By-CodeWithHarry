import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);


  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)
  }, [count]);


  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <Navbar color={"Navy" + " Blue " + color} />
    </>
  )
}

export default App
