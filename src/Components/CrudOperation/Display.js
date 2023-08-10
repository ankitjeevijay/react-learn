import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {
    const [users, setUsers] = useState([])

    const userList = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(data)
        setUsers(res.data)
    }

    useEffect(() => {
        userList()

    }, [])
    console.log(users)
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
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((item,index) => (

                                            <tr key={index}>
                                                <td>{item.id }</td>
                                                <td>{item.name }</td>
                                                <td>{ item.email}</td>
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

export default Display