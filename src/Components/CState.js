import React, { Component } from 'react'

export default class CState extends Component {
    constructor(){
        super()
        this.state = {
            name:'ankit jee vijay'
        }
    }
    updateData(){
        this.setState({name:'vijay'})
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.updateData()}>Update</button>
      </div>
    )
  }
}
