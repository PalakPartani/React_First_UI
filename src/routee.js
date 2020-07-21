import React, { Component } from 'react';
import DefaultRouter from './components/DefaultRouter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

//pages
import Home from './pages/Home';
import Feature from './pages/Feature';
import Login from './pages/Login';

export default class Routingg extends Component {

    render() {

        return (
            <Router>
                <Route path="/" component={Home} />
                <Route path="/feature" component={Feature} />
                <Route exact path="/login" component={Login} />
            </Router>
        )
    }
}
