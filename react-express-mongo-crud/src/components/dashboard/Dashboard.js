import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [],
        }
    }
    componentDidMount(){
        axios.get('/users')
        .then(res => {
            this.setState({ data: res.data });
            console.log(res.data)
        })
      }

  render() {
    return (
        <div className="dashboard container">
            <table>
                <thead>
                    <tr>
                        <th>lastName</th>
                        <th>firstName</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.data.map((user, i) => 
                        <tr key={i}>
                            <th>{user.lastName}</th>
                            <th>{user.firstName}</th>
                            <th>{user.email}</th>
                            <th>{user.password}</th>
                        </tr>       
                    )
                }
                </tbody>
            </table>
        </div>
    );
  }
}

export default Dashboard
