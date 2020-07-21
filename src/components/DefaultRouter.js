import React, { Component } from 'react';
import '../App.css';
import '../index.js';
import PriceTypes from './PriceTypes';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class DefaultRoutes extends Component {
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