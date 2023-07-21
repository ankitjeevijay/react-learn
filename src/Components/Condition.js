import React, { useState } from 'react'

const Condition = () => {
    const[login,setLogin] = useState()
  return (
    <>
    {
        login == 1?
        <h1>welcome user one</h1>
        :login==2? <h1>welcome user two</h1>
        :<h1>welcome user three</h1>
    }
    </>
  )
}

export default Condition