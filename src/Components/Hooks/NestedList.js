import React from 'react'

const NestedList = () => {

    const user =[
        {
            name:'anil',email:'ram@gmail.com'
        },
        {
            name:'anil',email:'ram@gmail.com'
           
        },
        {
            name:'anil',email:'ram@gmail.com'
        }
       
    ]
  return (
    <>
    <table>
        <thead>
            <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
            
        </thead>
        <tbody>
            {user.map((item,i)=>
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>pending</td>
            </tr>
            
            )    
            }
        </tbody>
    </table>

    </>
  )
}

export default NestedList