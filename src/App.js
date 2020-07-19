import React, { Component } from 'react';
import PriceTypes from './components/PriceTypes';

import './App.css';

class App extends Component {
  render() {

    return (
      // <div className="App">
      <div>
        <div className="container">
          <header className="header">
            <div style={{ width: '40 %', padding: '10px' }}>
              Company Name
          </div>
            <div style={{ width: '60 %', alignContent: 'top' }}>
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
            <h2 >This is first React UI</h2>
            <p>Quickly build an effective pricing table for your potential</p>
            <p> customers with this layout.Its built with default </p><p>Material UI Components with little customization </p>

          </div>
          <PriceTypes />
          {/* <div className="box">
            <div className="firstbox">
              <div className="free">
                <p>Free</p>
              </div>

              <p><h2>$0 /mo</h2>
          10 users included</p><p> 2 GB of storage</p><p> Help center access </p>
              <p>Email support</p>
              <button class="button-color" type="submit">SIGN UP FOR FREE</button>
            </div>

            <div className="firstbox">
              <div className="free">
                <p>Pro</p>
              </div>

              <h2>$15 /mo</h2>
              <p> 20 users included</p><p>10 GB of storage</p>
              <p>Help center access </p>
              <p>Email support</p>
              <button class="button-color" type="submit">GET STARTED</button>
            </div>

            <div className="firstbox">
              <div className="free">
                <p>Enterprise</p>
              </div>
              <h2>$30 /mo</h2>
              <p> 50 users included</p><p>30 GB of storage</p><p> Help center access</p><p>Phone and Email support</p>
              <button class="button-color" type="submit">CONTACT US</button>
            </div>
          </div> */}


          <div className="down-box">
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

          </div>

          <div className="copy">
            <p><h6>copyright@ Your Website 2020</h6></p>

          </div>
        </div >
      </div>
    );
  }
}
export default App;