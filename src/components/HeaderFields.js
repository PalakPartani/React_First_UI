import React, { Component } from 'react';
import '../css/Style.css';
import { Link } from 'react-router-dom';

export default class HeaderFields extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'LOGIN',
            list: ["FEATURES", "ENTERPRISE", "SUPPORT"],
        };

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
    //         const list = [state.list.concat(' ' + state.value)];
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

    render() {
        return (
            <div className="container">
                <header className="header">
                    <div style={{ width: '50%', padding: '25px', fontWeight: 400, fontSize: 25 }}>
                        <nav>
                            <Link to='/feature'>
                                Company Name
                            </Link>
                        </nav>

                    </div>
                    <div style={{ width: '50%' }}>
                        <ul>
                            {this.state.list.map((item, index) => (<li key={item}>
                                {item}

                            </li>))}
                            <button className='loginButton' type="button" onClick={this.onRemoveFirstItem}>
                                LOGIN
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
            </div>
        );
    }

}
