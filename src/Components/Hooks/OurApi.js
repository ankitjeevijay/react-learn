import React, { useEffect, useState } from 'react'

const OurApi = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://ankit-ecommarce-project.onrender.com/api/allUser")
            .then((Response) => Response.json())
            .then((json) => setData(json.AllData))
    }, [])
    //console.log(data)
  return (
    <>
        <div className="container-fluid">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="card p-5">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile No</th>
                                            <th>Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobileNo}</td>
                                                <td>{item.address}</td>
                                            </tr>
                                        ))

                                        }
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

export default OurApi