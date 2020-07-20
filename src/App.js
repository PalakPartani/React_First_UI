import React, { Component } from 'react';
import PriceTypes from './components/PriceTypes';
import Details from './components/Details';

import './App.css';
import HeaderFields from './components/HeaderFields';
import Data from './components/Data';

class App extends Component {


  render() {
    var DataList = [{
      plan: "Free",
      tagLine: null,
      price: 0,
      users: 10,
      storage: 2,
      help: "Help center access",
      support: "Email support",
      button: "SIGN UP FOR FREE"

    }, {

      plan: "Pro",
      tagLine: "Most popular",
      price: 15,
      users: 20,
      storage: 10,
      help: "Help center access",
      support: "Priority Email support",
      button: "GET STARTED"

    }, {

      plan: "Enterprise",
      tagLine: null,
      price: 30,
      users: 50,
      storage: 30,
      help: "Help center access",
      support: "Phone & Email support",
      button: "CONTACT US"
    }]

    // const name = "Plk";

    //console.log(Data)

    return (
      // <div className="App">
      <div>
        <HeaderFields />
        {/* <PriceTypes /> */}
        <Data brand={DataList} />
        <Details />
        <div className="copy">
          <p><h6>copyright@ Your Website 2000</h6></p>

        </div>
      </div >
      // </div >
    );
  }

}
export default App;