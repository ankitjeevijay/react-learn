import React, { useReducer } from 'react'

const reducer = (state,action)=>{
   // console.log(state,action)
    //return state
    switch(action.type){
        case 'increment':
            return state +1
        case 'decrement' :
            return state -1
        default :
            return state
    }

}
const UseReducer1 = () => {
    const initialState = 0
    const[state,dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <h1>count:{state}</h1>
    <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
    <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
    <br/>
    </>
  )
}

export default UseReducer1