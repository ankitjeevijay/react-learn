import React from 'react'
import D from './D'

const C = (props) => {
  return (
    <>
    <h1>C Component</h1>
    <h1>Name:{props.data}</h1>
    <D data ={props.data}/>
    </>
  )
}

export default C