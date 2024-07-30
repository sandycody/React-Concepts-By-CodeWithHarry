import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      data = await res.json();
      setData(data);
    })();
  }, []);


  return (
    <>
      <nav style={{backgroundColor: "beige", padding: "1px"}}>
        <ul style={{display: 'flex', listStyle: 'none', gap: "20px", margin: "20px 26px"}}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      {data.map(c => {
        return (
          <div key={c.id} style={{ border: "2px solid black", margin: "25px 500px", textAlign: "center", backgroundColor: "lightgreen" }}>
            <div style={{ fontWeight: "900" }}>{`${c.id}.`}</div>
            <div style={{ margin: "12px 12px", fontWeight: "750" }}>{c.name}</div>
            <div style={{ margin: "12px 12px" }}>{<a href={c.email}>{c.email}</a>}</div>
          </div>
        );
      })}
    </>
  )
}

export default App
