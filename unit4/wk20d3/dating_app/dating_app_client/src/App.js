import React, { Component } from 'react';
import Daters from './components/Hello.js'
import Form from './components/Form'
class App extends Component {
  state = {
    daters: []
  }

  handleAdd = (event, formInputs) => {
    event.preventDefault()
    fetch('/users', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
  })
    .then(createdUser => createdUser.json())
    .then(jsonedUser => {
    // add notice to notices
    this.setState({
      users: [jsonedUser, ...this.state.daters]
    })
  })
  .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="HollyGrail">
        <Daters />
        <Form handleSubmit={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
