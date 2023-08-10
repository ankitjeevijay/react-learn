import React, { Component } from 'react'

export default class ComponentDidmount extends Component {
  constructor(){
    super();
    this.state ={
        count:0,
        name:'ram'
    }
    console.log('constractor')
}
componentDidMount(){
  console.log('componentDidMount')
}
componentDidUpdate(){
  console.log('component DidUpdate')
}
  render() {
    console.log('hello render')
    return (
      <>
      <h1>component Didmount {this.state.name}</h1>
      <h1>component Didmount {this.state.count}</h1>
      <button onClick={()=>this.setState({name:'shyam'})}>Update Name</button>
      <button onClick={()=>this.setState({count:1})}>Update count</button>
      </>
    )
  }
}
