import React, { createContext } from 'react'
import Child1 from './Child1'

const mycontext = createContext()

const UseContext = () => {

  const data = 'ankit yadav'

  return (
    <>
      <h1>UseContext</h1>
      <mycontext.Provider value={data}>
        <Child1 />
      </mycontext.Provider>

    </>
  )
}

export default UseContext;
export { mycontext }