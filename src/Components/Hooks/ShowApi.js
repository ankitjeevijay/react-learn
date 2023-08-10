import React, { useEffect, useState } from 'react'


const ShowApi = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://pnintership.onrender.com/api/getAllCertificate")
            .then((Response) => Response.json())
            .then((json) => setData(json.data))
    }, [])
    //console.log(data)

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="card p-5">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>S.N</th>
                                            <th>StudentName</th>
                                            <th>CourseName</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.studentName}</td>
                                                <td>{item.courseName}</td>
                                                <td>{item.courseName}</td>
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

export default ShowApi