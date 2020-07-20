import React, { Component } from 'react';
import '../App.css';
import '../index.js';

export default class FooterData extends Component {

    render() {
        console.log(this.props.brandd)
        var brandData = [];

        for (let data of this.props.brandd) {
            brandData.push(
                <div className="down-box">
                    <div className="downthirdbox">
                        <div className="down-name">
                            <p>{data.name}</p>
                        </div>
                        <p>{data.team}</p>
                        <p>{data.hist}</p>
                        <p>{data.con}</p>
                        <p>{data.loc}</p>
                    </div>
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