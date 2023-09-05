import React, { useRef } from 'react'

const UseRef = () => {
    let inputRef = useRef(null)
    function controlInput(){
        inputRef.current.value = 'ankit yadav'
        inputRef.current.focus()
        inputRef.current.style.color = 'red'
        inputRef.current.style.backgroundColor = 'green'
    }
  return (
   <>
   <h1>use Ref</h1>
   <input ref={inputRef} type="text" />
   <button onClick={controlInput}>hadle input</button>
   </>
  )
}

export default UseRef