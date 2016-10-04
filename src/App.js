import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        };
    }

    componentWillMount(){
        var self = this;

        fetch(
            'https://loyalty-engine-qa.vandorp.io/GDILoyalty/v1.0/en/loyalty/details/?format=json'
        ).then(
            function(res) {
                return res.json()
            }
        ).then(
            function(json) {
                self.setState({ data: json })
                self.setState({ name: "Joost VanDorp"})
            }
        ).catch(
            function(error) {
                console.log(error)
            }
        )
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <p>
                {this.state.name}
                </p>

            </div>
        );
    }
}

export default App;




