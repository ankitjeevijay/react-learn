import React from 'react'
import { Link } from 'react-router-dom'

const Display = () => {
  return (
   <>
    <div className="container-fluid">
        <div className="container my-5">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card p-5">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ankit</td>
                                    <td>ankit@gmail.com</td>
                                    <td className='text-center'>
                                        <Link className='btn btn-info'>Edit</Link>
                                        <Link className='btn btn-success ms-1'>View</Link>
                                        <Link className='btn btn-danger ms-1'>Delete</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Display