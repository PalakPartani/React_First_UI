import React, { Component } from 'react';
import '../css/Style.css';
import '../index.js';

export default class Card extends Component {

    render() {
        console.log(this.props.DataList)
        var brandData = [];

        for (let data of this.props.DataList) {
            brandData.push(
                <div className="firstbox">
                    <div style={{ height: '90%' }}>
                        <div className="free">
                            <p>{data.plan}</p>
                            <p className="tagLine"> {data.tagLine ? data.tagLine : ""} </p>

                        </div>
                        <p><b style={{ fontSize: '30px', fontWeight: 500 }}>$ {data.price} </b> /mo</p>
                        <p>{data.users}users included</p><p>{data.storage} GB of storage</p><p> Help center access </p>
                        <p>Email support</p>
                    </div>
                    <button className="button-color" type="submit">{data.button}</button>
                </div >

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