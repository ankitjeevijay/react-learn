import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
import { useCallback } from 'react'

const UseCallBack = () => {
  const[count,setCount] = useState(0)
  console.log('parent rerender')
  //example 2
  const[count1,setCount1] = useState(0)

  const increamentCount = useCallback(()=>{
    //setCount1((PrevCount)=>PrevCount +1)
    console.log('use call back hooks')
  },[])

  // const increamentCount = ()=>{
  //   console.log('hello')
  // }

  return (
    <>
    <h1>use call back</h1>
    <h2>count:{count}</h2>
    <button onClick={()=>setCount(count +1)}>increment count</button><br /><br />
    <h1>count One: {count1}</h1>
    {/* <ChildComponent increament ={increamentCount}/> */}
    <ChildComponent increament={increamentCount}/>
    </>
  )
}

export default UseCallBack