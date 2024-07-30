import { useState } from 'react'
import './App.css'

function App() {
  const [showbtn, setShowbtn] = useState(true);
  const [todos, setTodos] = useState([
    {
      title: "Todo 1",
      desc: "Learnt most of the React from harry"
    },

    {
      title: "Todo 2",
      desc: "Connection from frontend to backend"
    },

    {
      title: "Todo 3",
      desc: "Build projects of MERN"
    }

  ])

  //Also we can create a small component here only and we don't want to use that in components folder
  const BasicCompo = ({ styling }) => {
    return (
      <>
        <div style={styling}>I am just a basic component</div>
      </>
    );
  }

  const Todo = ({todo}) => {
    return (
      <>
        <div style={{margin: "20px", padding: "20px", border: "2px solid cyan"}}>
          <div className="todo" style={{fontWeight: "800", marginBottom: "10px"}}>{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Ternary Operator */}
      {showbtn ? <button style={{ backgroundColor: "lightgreen", color: "black", display: "block", margin: "20px 100px" }}>showbtn is true</button> : <button style={{ backgroundColor: "#f55555bd", color: "black", display: "block", margin: "20px 100px" }}>showbtn is false</button>}

      {/* Conditional Rendering using '&&' */}
      {/* {showbtn && <button>showbtn is true</button>} */}

      <button onClick={() => setShowbtn(!showbtn)}>Toggle Show button</button>

      {/* <BasicCompo styling={{border: "2px solid cyan", padding: "20px"}} /> */}

      {/* Rendering List in react */}

      {todos.map(todo => {
        /* Using Todo component separately and return*/
        // return <Todo key={todo.title} todo={todo} />

        /*  Without using Todo component separately and returning it in one go */
        return (
          <div key={todo.title} style={{ margin: "20px", padding: "20px", border: "2px solid cyan" }}>
            <div className="todo" style={{ fontWeight: "800", marginBottom: "10px" }}>{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}
    </>
  )
}

export default App;
