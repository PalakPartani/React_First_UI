import React, { Component } from 'react';
import PriceTypes from './components/PriceTypes';
import Details from './components/Details';

import './App.css';

class App extends Component {
  render() {

    return (
      // <div className="App">
      <div>
        <div className="container">
          <header className="header">
            <div style={{ width: '40 %', padding: '25px' }}>
              Company Name
          </div>
            <div style={{ width: '60 %' }}>
              <ul>
                <li>FEATURES</li>
                <li>ENTERPRISE</li>
                <li>SUPPORT </li>
                <li>LOGIN</li>
              </ul>
            </div>
          </header>
          <div className="headingprice">
            <h5>Pricing</h5>
          </div>
          <div className="heading">

            <p>Quickly build an effective pricing table for your potential</p>
            <p> customers with this layout.Its built with default </p><p>Material UI Components with little customization </p>

          </div>
          <PriceTypes />

          <Details />

          {/* <div className="down-box">
            <div className="downfirstbox">
              <div className="down-name">
                <h5>Company</h5>
              </div>

              <p>Team</p>
              <p>History</p>
              <p>Contact Us</p>
              <p>Location</p>
            </div>
            <div className="downsecondbox">
              <div className="down-name">
                <h5>Features</h5>
              </div>
              <p>Cool Stuff</p>
              <p>Random Feature</p>
              <p>Team Feature</p>
              <p>Developer Stuff</p>
              <p>Another One</p>
            </div>
            <div className="downthirdbox">
              <div className="down-name">
                <h5>Resources</h5>
              </div>
              <p>Resource</p>
              <p>Resource Name</p>
              <p>Another Resource</p>
              <p>Final Resource</p>
            </div>
            <div className="fourthbox">
              <div className="down-name">
                <h5>Legal</h5>
              </div>
              <p>Privcy Policy</p>
              <p>Terms of Use</p>
            </div>

          </div> */}

          <div className="copy">
            <p><h6>copyright@ Your Website 2020</h6></p>

          </div>
        </div >
      </div>
    );
  }
}
export default App;