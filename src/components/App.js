import React, { Component } from 'react';
import Routing from "./Routing";
class App extends Component {
  render() {
    return (
      <Routing {...this.props}/>
    );
  }
}

export default App;