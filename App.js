import React, { Component } from "react";

class App extends Component {
  
  state = {
    number: 0
  };

  add = () => {
    this.setState({
      number: this.state.number < 10 ? this.state.number +1 : 10
    })
  };

  remove = () => {
    this.setState({
      number: this.state.number > 0 ? this.state.number - 1 : 0
    })
  };

  clear = () => {
    this.setState({
      number: 0
    })
  }

  render() {
    return (
      <div>
        <h1>Accountant</h1>
        <h2>{this.state.number}</h2>
        <button onClick={this.remove}>-</button>
        <button onClick={this.add}>+</button>
        <button onClick={this.clear}>C</button>
      </div>
    );
  }
}

export default App;
