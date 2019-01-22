import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app, now on git.</h1>
        <p>Just a little paragraph here, minding my own business.</p>
        <Person name="Max" age="28"></Person>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"></Person>
        
      </div>
      
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work?'))
  }
}

export default App;
