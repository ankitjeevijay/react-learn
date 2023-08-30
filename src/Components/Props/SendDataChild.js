import React from 'react'

const SendDataChild = (props) => {
    const user = {name:'ankit',email:'ankit@gmail.com'}
  return (
    <button onClick={()=>props.data(user)} className='btn btn-danger'>send data</button>
  )
}

export default SendDataChild