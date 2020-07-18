import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <p>Company Name</p>
          <head-left >
            <p>FEATURES</p>
            <p>ENTERPRISE</p>
            <p>SUPPORT</p>
            <p>LOGIN</p>
          </head-left>
        </header>
        <h3>Pricing</h3>
        <h2>This is first React UI</h2>
        <p>Quickly build an effective pricing table for your potential</p>
        <p> customers with this layout.Its built with default </p><p>Material UI Components with little customization </p>

        {/* <type-f>
          <p>FREE</p>
          <p>PRO</p>
          <p>ENTERPRISE</p>
        </type-f> */}
        <free-tab>
          <p>FREE</p>
          <p><h2>$0 /mo</h2>
          10 users included</p><p> 2 GB of storage</p><p> Help center access Email support</p>
          <button type="submit">SIGN UP FOR FREE</button>
        </free-tab>
        <pro-tab>
          <p>PRO</p>
          <h2>$15 /mo</h2>
          <p> 20 users included</p><p>10 GB of storage</p>
          <p>Help center access Email support</p>
          <button type="submit">GET STARTED</button>
        </pro-tab>
        <enterprise-tab>
          <p>ENTERPRISE</p>
          <h2>$30 /mo</h2>
          <p> 50 users included</p><p>30 GB of storage</p><p> Help center access</p><p>Phone and Email support</p>
          <button type="submit">CONTACT US</button>
        </enterprise-tab>
        <down-comp>
          <h3>Company</h3>
          <p>Team</p>
          <p>History</p>
          <p>Contact Us</p>
          <p>Location</p>
        </down-comp>
        <down-comp>
          <h3>Features</h3>
          <p>Cool Stuff</p>
          <p>Random Feature</p>
          <p>Team Feature</p>
          <p>Developer Stuff</p>
          <p>Another One</p>
        </down-comp>

        <down-comp>
          <h3>Resources</h3>
          <p>Resource</p>
          <p>Resource Name</p>
          <p>Another Resource</p>
          <p>Final Resource</p>
        </down-comp>

        <down-comp>
          <h3>Legal</h3>
          <p>Privcy Policy</p>
          <p>Terms of Use</p>
        </down-comp>

        <p><h6>copyright@ Your Website 2020</h6></p>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello World
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

