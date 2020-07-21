import React, { Component } from 'react';
import HeaderFields from '../components/HeaderFields';

export default class Home extends Component {

    render() {

        return (
            <div >
                {/* Header part */}
                <HeaderFields />

                <div style={{ margin: '0px auto', width: '1200px' }}>
                    <h1>Feature page</h1>
                </div>
            </div>
        )
    }
}