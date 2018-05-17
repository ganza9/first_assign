import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    inputs: [
      {name: 'gLove'}
    ],
    outputs: [
      {paragraph: 'testOne'},
      {paragraph: 'testTwo'}
    ]
  }

  enterNameHandler = (event) => {
    this.setState( {
      inputs: [
        { name: event.target.value }
      ]
    })
  }

  typeParagraphHandler = (event) => {
    this.setState( {
      outputs: [
        { paragraph: event.target.value },
        { paragraph: event.target.value }       
      ]
    })
  }



  render() {
    return (
      <div className="input">
        <h1>First Assignment</h1>
        <UserInput
        name={this.state.inputs[0].name}
        changed={this.enterNameHandler} />

        <UserOutput 
         paragraph = {this.state.outputs[0].paragraph}
         entered={this.typeParagraphHandler}
         />
        <UserOutput
          paragraph={this.state.outputs[1].paragraph}
          entered={this.typeParagraphHandler}/>
      </div>
    );
  }
}

export default App;
