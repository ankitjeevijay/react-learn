import React, { useState } from 'react'
import UseReducer1 from './UseReducer1'

const UseReducer = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1> user Reducer </h1>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />

      <UseReducer1 />
    </>
  )
}

export default UseReducer