import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("talented");

  // const getAdjective = () => {
  //   setAdjective("good");
  // }

  // const getAdjective2 = () => {
  //   setAdjective("good");
  // }


  // console.log(getAdjective === getAdjective2); //false (As these two functions are same but javascript treats it differently, so when App.jsx re-renders the getAdjective function is treated differently and hence "Navbar is rendered" logging in again and again)


  /* So react treats the getAdjective function differenly on every re-render.
  
  So to stop this re-render again ana again, we use useCallback hook
  */

  const getAdjective = useCallback(() => {
    setAdjective("good");
  }, [count]) // Now "Navbar is rendered" will not render again and again


  return (
    <>
      <Navbar adjective={adjective} getAdjective={getAdjective} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
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
