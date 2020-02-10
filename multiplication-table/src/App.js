import React, { Component } from 'react';
import common from './common';
import NumberCard from './NumberCard/NumberCard';
import Title from './Title/Title';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const numArray = new common().getNumberArray(2, 10);
    this.state = {
      numbers: numArray
    };
  }

  render() {
    return (
      <div className="App">
        <Title />
        { this.state.numbers.map((n, index) => {
          return (
            <NumberCard number={ n } key={ index } />
          );
        }) }
      </div>
    );
  }
}

export default App;
