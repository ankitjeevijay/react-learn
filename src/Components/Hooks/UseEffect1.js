import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const[count,setCount] = useState(100)
    const[data, setData] = useState(10)

    useEffect(()=>{
        console.warn('Data is :'+data )
    },[data])

    useEffect(()=>{
        console.log('count is :'+ count);
    },[count])
  return (
    <>
        <h1>useEffect with condition </h1>
        <h1>count: {count}</h1>
        <h1>Data:{data}</h1>
        <button className='btn btn-info' onClick={()=> setCount(count +1)}>Update count</button>
        <button className='btn btn-danger' onClick={()=> setData(data +1)}>Update Data</button>
    </>
  )
}

export default UseEffect1