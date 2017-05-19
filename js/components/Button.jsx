import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <button onClick={this.increment.bind(this)} className="button">
        Button clicked: {this.state.count} times
      </button>
    );
  }
}
