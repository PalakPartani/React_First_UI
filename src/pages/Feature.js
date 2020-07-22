import React, { Component } from 'react';
import HeaderFields from '../components/HeaderFields';
import { Link } from 'react-router-dom';
import Operation from './Operation';

export default class Home extends Component {

    render() {
        var users = [{
            Id: 0,
            Name: "Palak Partani",
            Email: "ppartani@gmail.com",
            Status: "Active",
            Type: "User",
            LastSeen: "2d Ago",
            Permission: "Valid"
        },
        {
            Id: 1,
            Name: "Shri Partani",
            Email: "shri@gmail.com",
            Status: "Active",
            Type: "User",
            LastSeen: "2d Ago",
            Permission: "Valid"
        },
        {
            Id: 2,
            Name: "Puji Partani",
            Email: "puji@gmail.com",
            Status: "Active",
            Type: "User",
            LastSeen: "2d Ago",
            Permission: "Valid"
        },
        {
            Id: 3,
            Name: "Pallavi Partani",
            Email: "plvi@gmail.com",
            Status: "Active",
            Type: "User",
            LastSeen: "2d Ago",
            Permission: "Valid"
        },
        {
            Id: 4,
            Name: "Shri Partani",
            Email: "shri@gmail.com",
            Status: "Active",
            Type: "User",
            LastSeen: "2d Ago",
            Permission: "Valid"
        },
        {
            Id: 5,
            Name: "Puji Partani",
            Email: "puji@gmail.com",
            Status: "Active",
            Type: "User",
            LastSeen: "2d Ago",
            Permission: "Valid"
        },
        {
            Id: 6,
            Name: "Pallavi Partani",
            Email: "plvi@gmail.com",
            Status: "Active",
            Type: "User",
            LastSeen: "2d Ago",
            Permission: "Valid"
        },
        {
            Id: 7,
            Name: "Shri Partani",
            Email: "shri@gmail.com",
            Status: "Active",
            Type: "User",
            LastSeen: "2d Ago",
            Permission: "Valid"
        },
        ];

        var data = [{
            plan: "Free"
        }]

        return (
            <div>
                <HeaderFields />

                <div style={{ margin: '0px auto', width: '1200px' }}>
                    <h1>Feature page</h1>
                    <table>
                        {users.map(id =>
                            <tr>
                                <td>{id.Name}</td>
                                <td>{id.Status}</td>
                                <td>{id.Type}</td>
                                <td>{id.LastSeen}</td>
                                <td>{id.Email}</td>
                            </tr>
                        )
                        }
                    </table>
                </div>
            </div>
        )
    }
}
