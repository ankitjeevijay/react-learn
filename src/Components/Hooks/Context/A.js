import React from 'react'
import B from './B'

const A = () => {
    const name ='ankit'
  return (
    <>
    <h1>A Component</h1>
    <B data = {name}/>
    </>
  )
}

export default A