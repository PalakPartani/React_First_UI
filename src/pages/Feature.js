import React, { Component } from 'react';
import HeaderFields from '../components/HeaderFields';
import { Link } from 'react-router-dom';
import Operation from './Operation';
import '../css/Style.css';


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

        // var data = [{
        //     plan: "Free"
        // }]

        return (
            <div>
                {/* <HeaderFields /> */}
                <div className="bodyy">
                    <div style={{ display: "flex", height: "10%", width: "auto", justifyContent: "center" }}>
                        <div className="userTitleLeft">
                            <h2>Users (<a id="count"></a>)</h2>
                        </div>
                        <div className="userTitleRight">
                            <div className="addUSerButton">
                                <button className="button" onclick="myFunction()"> + Add User</button></div>
                        </div>
                    </div>
                    <div className="small">
                        {/* style="display: flex; width:40%;background-color: white; height:6%;border: 1px solid silver;border-radius: 5px;"> --> */}
                        {/* <div style="width: 90%;">
                        <form action="index.html">
                            <input type="text" placeholder="Search by name,email,status,role.." name="Search"
                                style="width: 100%; border: none;height: 8px;">
                                   
                        </form>
                    </div> */}
                    </div>

                    {/* <div style="padding: 10px 10px;"></div> */}
                </div>







                <div style={{ margin: '0px auto', width: '1200px' }}>
                    <h1>Feature page</h1>
                    <table className="table">
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
            </div >
        )
    }
}
