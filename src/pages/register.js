import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class extends Component{
    render(){
        return(
            <div className="container">
                <div>
                    <h1>Register</h1>
                    <br/>
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" id="username"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Password" id="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password" id="pwd"/>
                        </div>
                        <button className="btn btn-primary">Register</button>
                    </form>
                    <br/>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}