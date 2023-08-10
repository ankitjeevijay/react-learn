import React, { Component } from 'react'

export default class Render1 extends Component {
    constructor(){
        super();
        this.state ={
            email:'ankit@gamil.com'
        }
    }
  render() {
    console.log('render method')
    return (
      <>
      <h1>user {this.state.email}</h1>
      <button onClick={()=>this.setState({email:'raju@gmail.com'})}>Click</button>
      </>
    )
  }
}
