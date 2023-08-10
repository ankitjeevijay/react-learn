import axios from 'axios'
import React, { useState } from 'react'

const Insert = () => {
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[selectedFile,setSelectedFile] = useState('')
  

  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    const userData = new FormData()
    userData.append('name',name)
    userData.append('email',email)
    userData.append('password',password)
    userData.append('image',selectedFile)
    
    
    // try{
    //   const res = await axios.post('')

    // }catch(error){
    //   console.log(error)

    // }
  }
  console.log(name,email,password,selectedFile)
  return (
    <>
       <div className="container-fluid">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card p-5">
                  <h1 className='text-center'>Registration Here</h1>
                  <form onSubmit={onSubmitHandler} encType='multipart/form-data'>
                    <div className="mb-3">
                      <label htmlFor="">Name</label>
                      <input type="text" onChange={(e)=> setName(e.target.value)}  value={name}  className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Email</label>
                      <input type="email" onChange={(e)=> setEmail(e.target.value)} name='name' value={email} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Password</label>
                      <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Photo</label>
                      <input type="file" id="fileInput" onChange={(e)=> setSelectedFile(e.target.files[0])} value={selectedFile} className='form-control' />
                    </div>
                    <div className="mb-3 text-center">
                      <button type='submit' className='btn btn-danger'>Submit</button>
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

export default Insert