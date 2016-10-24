import React, { Component } from 'react';
import './listing.css';
import Header from './header.js';

class Listing extends Component {

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

  render() {      
    if (this.state.isLoading) {
      return (
        <div>I am loading</div>
      )
    }

    return (
      <div className="listing-wrapper">
        <Header />
        <ListingHero />
        <div className="page-title">
          <h2>Auction Items</h2>
        </div>
        <div className="listing-container">
          { this._renderList(this.state.data) }
        </div>
      </div>
    );

  }

  _renderList(dataSource) {

    return (
      dataSource.map((item, key) => {
        var backgroundImage = {
          backgroundImage: 'url(' + item.image + ')'
        }
        return (
          <div className="list-item">
            <div className="shadow-container">
              <div className="image-container" style={backgroundImage}>
                <div className="dark-filter">
                  <h3>{item.name}</h3>
                </div>
              </div>
              <div className="item-details-container">
                <div className="item-bid">
                  <p>Starting bid</p>
                  <span className="amount">${item.minimum_bid}</span>
                </div>
                  <a className="bid-now" href="#"><span>Bid now</span></a>
              </div>
            </div>
          </div>
        )
      }
    ))
  }
}

class ListingHero extends Component {
    render() {
    return (
        
        <div className="hero-image-wrapper">
          <div className="skew-container">
              <div className="text-container">
                <h1>GALE silent Auction</h1>
                <h2>Help us support Naya Foundation by bidding on an item you want</h2>
              </div>

          </div>
        </div>
    );
  }
}

export default Listing;