import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count,setCount]= useState(0)
  return (
   <>
    <p>you clicked {count} Times</p>
    <button onClick={()=> setCount(count+1)}>Add Count</button>
   </>
  )
}

export default UseState