import React, { Component } from 'react';
import '../App.css';

export default class HeaderFields extends Component {

    render() {
        return (
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
                    <h1 className="titlePrice">Pricing</h1>
                </div>
                <div className="heading">

                    <p>Quickly build an effective pricing table for your potential</p>
                    <p> customers with this layout.Its built with default </p><p>Material UI Components with little customization </p>

                </div>
            </div>
        );
    }

}
