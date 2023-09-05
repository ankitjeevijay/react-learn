import React, {forwardRef} from 'react'

const ForwordRef = (props,ref) => {
  return (
    <>
    <input ref={ref} />
    </>
  )
}

export default forwardRef(ForwordRef)