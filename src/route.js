import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import HeaderFields from './components/HeaderFields';

//pages
import Home from './pages/Home';
import Feature from './pages/Feature';
import Login from './pages/Login';
import Details from './components/Details';
import User from './pages/User';

export default class Routingg extends Component {

    render() {

        return (
            <Router>
                <HeaderFields />
                <Route exact path="/" component={Home} />
                <Route exact path="/feature" component={Feature} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/adduser" component={User} />
                <Details />
            </Router>
        )
    }
}