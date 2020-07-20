import React, { Component } from 'react';
import '../App.css';
import '../index.js';

export default class Data extends Component {

    render() {
        console.log(this.props.DataList)
        var brandData = [];

        for (let data of this.props.DataList) {
            brandData.push(
                <div className="firstbox">
                    <div className="free">
                        <p>{data.plan}</p>
                    </div>

                    <h2>$ {data.price} /mo</h2>
                    <p>{data.users}users included</p><p>{data.storage} GB of storage</p><p> Help center access </p>
                    <p>Email support</p>
                    <button className="button-color" type="submit">{data.button}</button>
                </div>

            )

        }

        return (
            <div className="box">
                {brandData}
            </div>
        )
    }

    componentDidMount() {
        console.log("Inside");
    }
}