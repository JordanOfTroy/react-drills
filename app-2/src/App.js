import React, {Component} from 'react'
import './App.css'

export default class App extends Component {

constructor (prop) {
  super (prop)
    this.state = {
      sodaBrands: [
        'Coke',
        'Pepsi',
        'Shasta',
        'la Croix'
      ]
    }
}

render () {

let kindsOfSoda = this.state.sodaBrands.map((element, index) => {
  return <h1 key = {index}>{element}</h1>
})

  return (
    <div className = 'App'>
      {kindsOfSoda}
    </div>
  )
}

}