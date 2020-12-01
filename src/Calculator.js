import React, { Component } from 'react'

class Calculator extends Component {

    state={
        answer: '',
        numOne: '',
        numTwo: ''
    }

    numOneChange = (e) => {
        console.log('Number one is ', e.target.value)
        this.setState({
            numOne: parseInt(e.target.value)
          })
    }

    numTwoChange = (e) => {
        console.log('Number two is ', e.target.value)
        this.setState({
            numTwo: parseInt(e.target.value)
          })
    }

    add = (e) => {
        console.log('Adding numbers...')
        e.preventDefault()
        this.setState({
           answer: this.state.numOne + this.state.numTwo
        })
    }




    render(){
        return(
            <div className="container">
            <h1>Add with React!</h1>
          
            <div className="add">
              <input type="text" 
              onChange={(e) => this.numOneChange(e)}
              value={this.state.numOne}/>
              <span>+</span>
              <input type="text"
              onChange={(e) => this.numTwoChange(e)} 
              value={this.state.numTwo}/>
              <button onClick={this.add}>=</button>
              <h3>{this.state.answer}</h3>
            </div>
          </div> 
        )
    }
}


export default Calculator