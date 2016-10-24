import React, { Component } from 'react';
import './item.css';
import Header from './header.js';

class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      overlay: false,
      didInvalidate: true,
      overlayHeight: 0,
      bidInput: 0
    };
    this._handleChange= this._handleChange.bind(this);
    this._overlay = this._overlay.bind(this);
    this._cancelBid = this._cancelBid.bind(this);
  }

  componentWillMount() {
    return {
      data: "",
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
      window.addEventListener('resize', () => this._onResize());
  }

  createMarkup(html) {
    return {__html: html};
  }

  _handleChange(event) {
    this.setState({
      bidInput: event.target.value
    });
  }

  _overlay() {
    this.setState({
      overlay: true
    })
  }

  _cancelBid() {
    this.setState({
      overlay: false
    })
  }

  _onResize() {
      this.setState({
        didInvalidate: true });
  }

  _overlayCover(el){
    if(el && this.state.didInvalidate) {
      this.setState({
        didInvalidate: false,
        overlayHeight: el.clientHeight
      })
    }
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

    var overlayStyle = {
      height: this.state.overlayHeight
    }

    var overlayTop = {
      top: (document.body.scrollTop) + (window.innerHeight * .1)
    }

    var valueLink = {
      value: this.state.bidInput,
      requestChange: this._handleChange
    }

    return (
      <div className="item-wrapper" ref={this._overlayCover.bind(this)}>
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
                <input type="number" min={this.state.data[0].minimum_increase} placeholder={this.state.data[0].minimum_increase} onChange={this._handleChange}/>
              </span>
              <div className="submit-button" onClick={this._overlay}>
                <span>
                  Bid Now
                </span>
              </div>
            </div> 
          </div>

        </div>
        <div className={"overlay-container " + (this.state.overlay ? 'active' : '')} style={overlayStyle}>
            <div className="overlay-inside" style={overlayTop}>
            <div className="cancel-container" onClick={this._cancelBid}>
              <div className="cancel">
              </div>
            </div>
              <span>Are you sure you want to bid <span>${this.state.bidInput === '' || this.state.bidInput < this.state.data[0].minimum_increase ? this.state.data[0].minimum_increase : this.state.bidInput }</span>?</span>
              <div className="submit-button">
                <span>
                  Bid Now
                </span>
              </div>
            </div>
        </div>
      </div>
    );
  }

}

export default Item;