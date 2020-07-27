import React, { Component } from 'react';
import '../css/Style.css';
import { withRouter } from 'react-router';

class Home extends Component {
    newPage = () => {
        this.props.history.push('/adduser');
    }

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

        return (
            <div>
                <div className="bodyy">
                    <div style={{ display: "flex", height: "10%", width: "auto", justifyContent: "center" }}>
                        <div className="userTitleLeft">
                            <h2>Users (<a id="count"></a>)</h2>
                        </div>
                        <div className="userTitleRight">
                            <div className="addUSerButton">
                                <button className="button" onClick={this.newPage}> + Add User</button></div>
                        </div>
                    </div>
                    <div className="small">
                    </div>
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
export default withRouter(Home);