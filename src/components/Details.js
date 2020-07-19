import React, { Component } from 'react';
import '../App.css';

export default class Details extends Component {
    render() {
        return (
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
        );
    }
}