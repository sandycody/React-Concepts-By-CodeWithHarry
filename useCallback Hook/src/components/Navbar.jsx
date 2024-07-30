import React, {memo} from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered");
  return (
    <div>
      <h1>Hey I am a {adjective} guy</h1>
      <button onClick={() => getAdjective()}>Change me</button>
    </div>
  )
}

export default memo(Navbar)

// memo ka yahi kaam hai jab props change honge tabhi re-render hoga otherwise re-render nhi hoga
