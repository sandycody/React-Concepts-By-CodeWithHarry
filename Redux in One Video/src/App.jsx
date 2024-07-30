import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementByAmount, increment, incrementByAmount, multiply } from './redux/counter/counterSlice';

function App() {
  // We can read data from store using useSelector hook
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrementByAmount(10))}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(incrementByAmount(10))}>+</button>
      </div>
    </>
  )
}

export default App
