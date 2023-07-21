import React, { useState } from 'react'

const State = () => {
    const[data, setData] = useState('ankit')
    const updateData= ()=>{
            setData('vijay')
    }
    console.log('No you are ankit')
  return (
    <>
        <h1>hello {data}</h1>
        <button onClick={updateData}>update</button>
    </>
  )
}

export default State