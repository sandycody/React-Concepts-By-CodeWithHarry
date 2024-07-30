import React, { useContext } from 'react'
import counterContext from '../context/context'

const Component1 = () => {
  const { count } = useContext(counterContext);
  return (
    <>
      <div>Component {count}</div>
    </>
  )
}

export default Component1
