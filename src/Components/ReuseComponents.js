import React from 'react'

const ReuseComponents = (props) => {
   // console.log(props)
  return (
    <>
    <h2>user detail</h2>
    <span className='px-3'>{props.data.name}</span>
    <span className='px-3'>{props.data.email}</span>
    <span>{props.data.phone}</span>
    </>
  )
}

export default ReuseComponents