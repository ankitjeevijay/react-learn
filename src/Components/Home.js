import React from 'react'
import SendDataChild from './Props/SendDataChild'
//import Bootstrap from './Bootstrap/Bootstrap'
//import ReuseComponents from './ReuseComponents'
//import UseEffect from './Hooks/UseEffect'
//import UseEffect1 from './Hooks/UseEffect1'
//import UseEffect2 from './Hooks/UseEffect2'
//import Display from './CrudOperation/Display'
//import Insert from './CrudOperation/Insert'
//import NestedList from './Hooks/NestedList'
//import ShowApi from './Hooks/ShowApi'
//import OurApi from './Hooks/OurApi'
//import Constractor from './lifecycleMethod/Constractor'
//import Render1 from './lifecycleMethod/Render1'
//import ComponentDidmount from './lifecycleMethod/ComponentDidmount'
//import PropsOne from './Props/PropsOne'
//import HideAndShowToggle from './Props/HideAndShowToggle'
//import UseState from './Hooks/UseState'
// import CState from './CState'
//import User from './User'
//import RegistrationForm from './RegistrationForm'

//import Condition from './Condition'
//import Click from './Click'
//import State from './State'


const Home = () => {
   //let name = 'ankit kumar'
  // const user =[
  //   {name:'ankit',email:'ankit@gmail.com',phone:9943543423},
  //   {name:'vijay',email:'vijay@gmail.com',phone:9943543423},
  //   {name:'abhishek',email:'abhishek@gmail.com',phone:9943543423},
  //   {name:'ravi',email:'ravi@gmail.com',phone:9943543423},
  //   {name:'sachin',email:'sachin@gmail.com',phone:9943543423},
  //   {name:'daya',email:'daya@gmail.com',phone:9943543423}
  // ]
  const parent = (user)=>{
    alert(user.name)
  }
  return (
    <>
    {/* <Click/> */}
    {/* <State/> */}
    {/* <Condition/> */}
    {/* <RegistrationForm/> */}
    {/* <User n={name}/> */}
    {/* <CState/> */}
    {/* <Constractor/> */}
    {/* <Render1/> */}
    {/* <ComponentDidmount/> */}
    {/* <PropsOne/> */}
    {/* <HideAndShowToggle/> */}
    {/* <UseState/> */}
    {/* <UseEffect/> */}
    {/* <UseEffect1/> */}
    {/* <UseEffect2/> */}
    {/* <Display/> */}
    {/* <Insert/> */}
    {/* <NestedList/> */}
    {/* <ShowApi/> */}
    {/* <OurApi/> */}
    {/* <Bootstrap/> */}
    {/* {
      user.map((item, index)=>
        // <h1>{item.name}</h1>
        <ReuseComponents data={item} />
      )
    } */}
    <SendDataChild data={parent}/>




    </>
  )
}

export default Home