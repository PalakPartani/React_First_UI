import React, { Component } from 'react';
import '../css/Style.css';

export default class User extends Component {
    render() {
        return (
            <div className="formelement">
                <form>
                    <input type="text" placeholder="Enter name" name="Search" />
                    <input type="text" placeholder="Enter Type" name="Search" />
                    <input type="text" placeholder="Enter name" name="Search" />
                </form>
            </div>
        )
    }
}