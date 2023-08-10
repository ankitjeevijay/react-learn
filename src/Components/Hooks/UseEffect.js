import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {
    const [count,setCount]= useState(0)

    useEffect(()=>{
        console.log('use database link')
    },[])
  return (
    <>
    <p>you clicked {count} Times</p>
    <button onClick={()=> setCount(count+1)}>Add Count</button>
   </>
  )
}

export default UseEffect