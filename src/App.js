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

  switchNameHandler = (newName) =>{
    //console.log('Hey, clicks work.')
    // This is a NO NO this.state.persons[0].name = 'Dr. Evil'
    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]})
  }

  nameChangedHandler = (event) =>{
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app, now on git.</h1>
        
        <button onClick={() => this.switchNameHandler('Dr. Evil')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, 'Bad Horse')}></Person>
        <Person name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        
      </div>
      
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work?'))
  }
}

export default App;
