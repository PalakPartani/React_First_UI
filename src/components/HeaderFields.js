import React, { Component } from 'react';
import '../App.css';

export default class HeaderFields extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'LOGIN',
            list: ["FEATURES", "ENTERPRISE", "SUPPORT"],
        };
        console.log("name");
    }

    // onUpdateItems = () => {
    //     this.setState(state => {
    //         const list = state.list.map(item => item + 1);

    //         return {
    //             list,
    //         };
    //     });
    // };
    // onAddItem = () => {
    //     this.setState(state => {
    //         const list = [state.list.concat('               ' + state.value)];
    //         return {
    //             list,
    //             value: '       LOGIN',
    //         };
    //     });
    // }

    onRemoveFirstItem = () => {
        this.setState(state => {
            const [first, ...rest] = state.list;

            return {
                list: rest,
            };
        });
    };
    // onRemoveItem = i => {
    //     this.setState(state => {
    //         const list = state.list.filter((item, j) => i == j);

    //         return {
    //             list,
    //         };
    //     });
    // };

    render() {
        return (
            <div className="container">
                <header className="header">
                    <div style={{ width: '50%', padding: '25px', fontWeight: 400, fontSize: 25 }}>
                        Company Name
                    </div>
                    <div style={{ width: '50%' }}>
                        <ul>
                            {this.state.list.map((item, index) => (<li key={item}>
                                {item}

                            </li>))}
                            <button className='loginButton' type="button" onClick={this.onRemoveFirstItem}>
                                RemoveItem
          </button>
                        </ul>

                        {/* <ul>
                            <li>FEATURES</li>
                            <li>ENTERPRISE</li>
                            <li>SUPPORT </li>
                            <li className='loginButton'>LOGIN</li>
                        </ul> */}
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
