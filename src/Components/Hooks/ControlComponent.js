import React, { useState } from 'react'

const ControlComponent = () => {
    const[inputValue,setInputValue] = useState()
    const onchangeHandle = (event)=>{
        setInputValue(event.target.value)
        console.log(inputValue)
    }
  return (
    <>
    <h1>control components</h1>
    <input type="text" value={inputValue} onChange={onchangeHandle} />
    <h1>current value: {inputValue}</h1>
    </>
  )
}

export default ControlComponent