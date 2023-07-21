import React, { useState } from 'react'

const RegistrationForm = () => {
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[address, setAddress] = useState()
    const totalData = (e)=>{
        //alert('hello')
        e.preventDefault()
        console.log(name,email,address)
    }
  return (
    <>
        <div className="container-fluid">
            <div className="contianer">
                <div className="row mt-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card p-5">
                         <h1 className='text-center'>Registration</h1>
                           <form onSubmit={totalData}>
                                <div className='mb-3'>
                                    <label htmlFor="">Name</label>
                                    <input onChange={(e)=>setName(e.target.value)} type="text" className='form-control' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="">Email</label>
                                    <input onChange={(e)=>setEmail(e.target.value)} type="email"  className='form-control' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="">Address</label>
                                    <input onChange={(e)=>setAddress(e.target.value)} type="text"  className='form-control' />
                                </div>
                                <div className='mb-3 text-center'>
                                    <button type='submit' className='btn btn-success form-control'>Regiter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RegistrationForm