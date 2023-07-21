import React from 'react'

const Click = () => {
    let name = 'ankit yadav'
    const hello = (a)=>{
      name= a;
        alert(name)
    }
  return (
    <>
    <h1>hello {name}</h1>
    <button onClick={()=>hello('vijay')} >Update</button>
    </>
  )
}

export default Click