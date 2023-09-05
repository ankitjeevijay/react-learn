import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const[count,setCount] = useState(0)
    const[item,setItem]= useState(10)


    // function multiCount(){
    //     console.log('multicount')
    //     return count*5
    // }
    const multiCountMemo = useMemo(
        function multiCount(){
            console.log('multiCount')
            return count*5
        },[count]
        )
  return (
    <>
    <h1>use memo hooks</h1>
    <h1>hooks in react: {count}</h1>
    <h1>hooks in item: {item}</h1>
    {/* <h1>{multiCount()}</h1> */}
    <h1>{multiCountMemo}</h1>
    <br /> <br />
    <button onClick={()=>setCount(count +1)}>Update count</button>
    <button onClick={()=> setItem(item*10)}>Update Item</button>

    </>
  )
}

export default UseMemo