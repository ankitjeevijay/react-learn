import React, { useRef } from 'react'

const UncontrolComponent = () => {
    let inputRef = useRef(null)
    let inputRef2 = useRef(null)
    const submitForm = (event)=>{
        event.preventDefault()
        console.log('first input value:', inputRef.current.value)
        console.log('second input value:',inputRef2.current.value)
        let input3 = document.getElementById('input3').value
        console.log('Third input value:',input3)
    }
  return (
    <>
    <form onSubmit={submitForm} >
        <input type="text" ref={inputRef} />
        <input type="text" ref={inputRef2} />
        <input type="text" id='input3' />
        <button>submit</button>
    </form>
    </>
  )
}

export default UncontrolComponent