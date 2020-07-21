import React, { Component } from 'react';
import PriceTypes from './components/PriceTypes';
import Details from './components/Details';

import './App.css';
import HeaderFields from './components/HeaderFields';
import Data from './components/Data';
import FooterData from './components/FooterData';

import DefaultRouter from './components/DefaultRouter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import feature from './components/feature';
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

    var compList = [{

      name: "Company",
      team: "Team",
      hist: "History",
      con: "Contact",
      loc: "Location"
    },
    {
      name: "Features",
      team: "Random Feature",
      hist: "Team Feature",
      con: "Developer Stuff",
      loc: "Location"
    },
    {
      name: "Resource",
      team: "Resource Name",
      hist: "Another Resource",
      con: "Final Resource",
      loc: ""
    },
    {
      name: "Legal",
      team: "Privcy Policy",
      hist: "Terms of Use",
      con: "",
      loc: ""

    }]

    return (
      <div>
        <Router>

          <HeaderFields />
          {/* <Route path="/" exact component={App} /> */}
          <Route path="/feature" exact component={feature} />


          {/* <HeaderFields /> */}
);

        {/* <PriceTypes /> */}
          <div style={{ margin: '0px auto', width: '1200px' }}>
            <Data DataList={DataList} />

            {/* <FooterData brandd={compList} /> */}

            <Details />
            <DefaultRouter />
            <div className="copy">
              <h6>copyright@ Your Website 2000</h6>
            </div>
          </div>
        </Router>
      </div >

    );
  }
}
export default App;