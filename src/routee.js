import React, { Component } from 'react';
import DefaultRouter from './components/DefaultRouter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

//pages
import Home from './pages/Home';
import Feature from './pages/Feature';
import Login from './pages/Login';

export default class Routingg extends Component {

    render() {

        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/feature" component={Feature} />
                <Route exact path="/login" component={Login} />
            </Router>
        )
    }
}
