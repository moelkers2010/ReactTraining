import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  } 

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name}
             age={person.age}
             click={() => this.deletePersonHandler(index)}></Person>
          }

          )}

          
        </div>

      )

    }
    return (

      <div className="App">
        <h1>Hi, I'm a react app, now on git.</h1>

        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work?'))
  }
}

export default App;
