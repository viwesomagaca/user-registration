import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class extends Component{
    render(){
        return(
            <div className="container">
              <div>
                <h1> Login </h1>
                <br/>
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" id="username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" id="pwd"/>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
                <br/>
                <Link to="/register">Register</Link>
              </div>
            </div>
        )
    }
}