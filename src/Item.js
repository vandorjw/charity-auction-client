import React, { Component } from 'react';
import './Item.css';
import Header from './Header.js';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
    }
  }

  componentWillMount() {
    return {
      data: ""
    }
  }
  componentDidMount() {
    fetch('/items/list/')
      .then((response) => response.json()) 
      .then((jsonData) => {

        this.setState({
          data: jsonData,
          isLoading: false,
        })
      })
  }
  createMarkup(html) {
    return {__html: html};
  }
  render() {     
    if (this.state.isLoading) {
      return (
        <div>I am loading</div>
      )
      
    }
    var backgroundImage = {
      backgroundImage: 'url(' + this.state.data[0].image + ')'
    }
    console.log(this.state.data[0].image);
    return (
      <div className="item-wrapper">
        <Header />
        <div className="hero-image-wrapper" style={backgroundImage}>
            <div className="text-container">
              <h1>{this.state.data[0].name} </h1>
            </div>
        </div>
        <div className="bid-wrapper">
          <div className="shadow-container">
            <div className="bid-details-top">
              <h2>Donated by {this.state.data[0].seller_name}</h2>
              <div className="html-insert" dangerouslySetInnerHTML={this.createMarkup(this.state.data[0].description)} />
                <div className="item-bid">
                  <p>Starting bid</p>
                  <span className="amount">${this.state.data[0].minimum_bid}</span>
                </div> 
            </div>
            <div className="form-container">
              <div className="retail-value">
                <span>Price value (min ${this.state.data[0].retail_value})</span>
              </div>
              <span className="bid-input">
                <input type="number" min={this.state.data[0].minimum_increase} />
              </span>
              <div className="submit-button">
                <span>
                  Bid Now
                </span>
              </div>
            </div> 
          </div>

        </div>
      </div>
    );
  }
}

export default Item;