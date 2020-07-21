import React, { Component } from 'react';
import '../App.css';
import '../index.js';
import PriceTypes from './PriceTypes';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import React from "react";

// import Details from './components/Details';


export default class DefaultRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={"/users"} exact component={PriceTypes} />
                </Switch>
            </BrowserRouter>
        );
    }
}