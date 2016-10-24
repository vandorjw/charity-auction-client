import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentWillMount() {
    return {
      data: ""
    }
}
    
 componentDidMount() {
    //this.props = fetch('/items/list/');
   $.get('/items/list/', function (result) {
      this.setState({
        data: result
      });
    }.bind(this));
  }

  

  render() {
    console.log(this.state);
    let {
      data
    } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{data.toString()}</h2>
        </div>
        <p className="App-intro">
         
          
        </p>
        <Hello />
      </div>
    );
  }
}
class Hello extends Component {
  render() {
    return(
      <div>
        <h2>gasfasdsdasddfa</h2>
      </div>
    )
  }

}

export default App;
