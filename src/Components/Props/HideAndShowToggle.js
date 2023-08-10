import React from 'react'
import { useState } from 'react'

const HideAndShowToggle = () => {
    const [status,setStatus] = useState(true)
  return (
    <>
    <div className="container">
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 p-5">
                    <h1 className='text-center'>Hide, Show and Toggle</h1>
                    {
                        status?<h1 className='text-danger text-center'>hello mirzapur</h1>:null
                    }
                    <div className='text-center'>
                        <button onClick={()=>setStatus(false)} className='btn btn-info mx-3'>Hide</button>
                        <button onClick={()=>setStatus(true)} className='btn btn-success mx-3'>Show</button>
                        <button onClick={()=>setStatus(!status)} className='btn btn-danger mx-3'>Toggle</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HideAndShowToggle