// Usage of useRef() 

/* useRef() hook is used to persist value across re-render */

import { useEffect, useRef, useState } from 'react';

// Syntax
/* const refObject = useRef(initial value); */

function App() {
  const [name, setName] = useState("");
  const refObject = useRef(); 

  const reset = () => {
    setName('');
    refObject.current.focus();
  }
  
  const defaultVal = () => {
    refObject.current.value = "Sandeep";
    refObject.current.focus();
  }

  return (
    <>
      <h1>Sandeep Wadhawan</h1>
      <input ref={refObject} type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={reset} style={{marginLeft: "10px"}}>Reset</button>
      <button onClick={defaultVal} style={{marginLeft: "10px"}}>Default</button>
    </>
  )
}

export default App;
