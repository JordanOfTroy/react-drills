import React , {Component} from 'react'
import './App.css'

export default class App extends Component {
  constructor (prop) {
    super (prop)
      this.state = {
        userMessage: ''
      }
  }

whatsTheMessage (val) {
  this.setState({
    userMessage: val
  })
}

  render () {
    return (
      <div className = 'App'>
        <input onChange = {(e) => this.whatsTheMessage(e.target.value)}/>
        <h1>{this.state.userMessage}</h1>
      </div>
    )
  }
}