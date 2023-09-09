import React, {memo} from 'react'

const ChildComponent = ({increament}) => {
    console.log('child rendered')
  return (
    <>
    <h1>Child component</h1>
    <button onClick={increament}> increament</button>
    </>
  )
}

export default memo(ChildComponent)