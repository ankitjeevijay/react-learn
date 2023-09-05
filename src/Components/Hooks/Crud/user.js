import React from 'react'

const user = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="container my-5">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card p-5">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Email</label>
                                <input type="email" className='form-control' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">password</label>
                                <input type="password" className='form-control' />
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn btn-success'>submit</button>
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

export default user