import React, { Component } from 'react';
import '../App.css';
import '../index.js';

export default class Data extends Component {

    render() {
        console.log(this.props.brand)
        var brandData = [];

        for (let data of this.props.brand) {
            brandData.push(
                <div className="firstbox">
                    <div className="free">
                        <p>{data.plan}</p>
                    </div>

                    <p><h2>$ {data.price} /mo</h2>
          10 users included</p><p> 2 GB of storage</p><p> Help center access </p>
                    <p>Email support</p>
                    <button class="button-color" type="submit">SIGN UP FOR FREE</button>
                </div>
            )

        }

        return (
            <div className="box">
                {brandData}
            </div>
        )
    }
}