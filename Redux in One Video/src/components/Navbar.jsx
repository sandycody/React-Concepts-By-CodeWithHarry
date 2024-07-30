import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  
  return (
    <>
      I am a navbar with counter {count}
    </>
  )
}

export default Navbar
