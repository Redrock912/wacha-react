import React from "react";
import PropTypes from "prop-types";
import { createSecureContext } from "tls";

class App extends React.Component {
  // dynamic data -> state
  state = {
    count: 0
  };

  componentDidMount() {
    console.log("render done");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("I'm Free");
  }

  // React automatically returns render function
  render() {
    console.log("render");
    return (
      <div>
        <h1>I'm a class {this.state.count}</h1>
        <button onClick={this.addCount}>Add</button>
        <button onClick={this.minusCount}>Minus</button>
      </div>
    );
  }

  addCount = () => {
    console.log("add");
    // setState tells react to call render() again with new state. if you don't use it render will not be called
    this.setState(current => ({ count: current.count + 1 }));
  };
  minusCount = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count - 1 }));
  };
}

export default App;
