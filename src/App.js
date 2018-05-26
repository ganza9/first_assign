import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "G Baby"
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="input">
        <h1>First Assignment</h1>

        <UserInput
            changed={this.usernameChangedHandler}
            currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>

      </div>
    );
  }
}

export default App;
