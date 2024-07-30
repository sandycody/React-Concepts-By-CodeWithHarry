import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_, ind) => {
  return {
    index: ind,
    isMagical: ind === 29_000_000
  };
});

function App() {
  /* When state in react changes, the component re-renders everytime */
  const [count, setCount] = useState(0); 
  const [numbers, setNumbers] = useState(nums);

  // const magical = numbers.find(item => item.isMagical); // Expensive computation which results in inefficient performance

  /* So here is the solution as this expensive computation we don't have to do again and again. We can avoid that expensive computation by using a hook.
  
  The hook called useMemo() hook.
  */

  /* Syntax : useMemo(calculatedValue, dependencies) */

  // Explanation: useMemo() let us cache (or save) the result of a calculatedValue between re-renders.

  // So hume useMemo() hook ka use tab karna hai jab between the re-renders hamari koi value baar baar compute na ho

  /* This is useMemo() without using dependency array */
  // const magical = useMemo(() => numbers.find(item => item.isMagical), []);

  /* This is useMemo() using dependency array */
  const magical = useMemo(() => numbers.find(item => item.isMagical), [numbers]);


  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          // Let's write a very basic code to change numbers to test whether our useMemo() works or not on changing numbers array

          if (count == 10) {
            setNumbers(new Array(10_000_000).fill(0).map((_, ind) => {
              return {
                index: ind,
                isMagical: ind === 9_000_000
              };
            }));
          }
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
