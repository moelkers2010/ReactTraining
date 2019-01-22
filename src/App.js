import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app, now on git.</h1>
        <p>Just a little paragraph here, minding my own business.</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        
      </div>
      
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work?'))
  }
}

export default App;
