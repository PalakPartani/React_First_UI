
import React, { Component } from 'react';
import '../App.css';

export default class PriceTypes extends Component {
    render() {
        return (
            <div className="box">
                <div className="firstbox">
                    <div className="free">
                        <p>Free</p>
                    </div>

                    <p><h2>$0 /mo</h2>
          10 users included</p><p> 2 GB of storage</p><p> Help center access </p>
                    <p>Email support</p>
                    <button class="button-color" type="submit">SIGN UP FOR FREE</button>
                </div>

                <div className="firstbox">
                    <div className="free">
                        <p>Pro</p>
                    </div>

                    <h2>$15 /mo</h2>
                    <p> 20 users included</p><p>10 GB of storage</p>
                    <p>Help center access </p>
                    <p>Email support</p>
                    <button class="button-color" type="submit">GET STARTED</button>
                </div>

                <div className="firstbox">
                    <div className="free">
                        <p>Enterprise</p>
                    </div>
                    <h2>$30 /mo</h2>
                    <p> 50 users included</p><p>30 GB of storage</p><p> Help center access</p><p>Phone and Email support</p>
                    <button class="button-color" type="submit">CONTACT US</button>
                </div>
            </div>
        );
    }
}