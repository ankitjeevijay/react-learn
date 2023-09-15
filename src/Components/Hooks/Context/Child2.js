import React, { useContext } from 'react'
import { mycontext } from './UseContext'

const Child2 = () => {
    const result = useContext(mycontext)
  return (
    <>
    <h1>Child2</h1>
    <h1>My name : {result}</h1>
    </>
  )
}

export default Child2