import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [content, setContent] = useState('posts')
    const [count, setCount] = useState(0)
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/'+ content)
            .then(response => response.json())
            //.then(json => console.log(json))
            .then(json=>setItem(json))
    }, [content])
   console.log(item)
    return (
        <>
            <button className='btn btn-dark' onClick={() => setContent('posts')}>Posts</button>
            <button className='btn btn-danger' onClick={() => setContent('users')}>User</button>
            <button className='btn btn-success' onClick={() => setContent('comments')}>comments</button>
            <button className='btn btn-warning' onClick={() => setCount(count + 1)}>Add {count}</button>
        </>
    )
}

export default UseEffect2