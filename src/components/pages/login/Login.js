import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import auth from '../../helper/auth'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    login = async (event) => {
        event.preventDefault();

        await auth.login(
            (token) => {this.props.setToken(token); this.props.history.push("/students");},
            this.state.username,
            this.state.password
        );      
    }

    onChange = (event) => this.setState({ [event.target.id]: event.target.value });

    render() {
        if(this.props.isAuthenticated){
            this.props.history.push("/students");
        }
        return (
            <form
                onSubmit={this.login}
                className="mt-3"
            >
                <div className="form-group">
                    <label for="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={this.state.username}
                        onChange={this.onChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Submit" />
                    <Link to="/register"></Link>
                </div>
            </form>
        )
    }
}

export default Login
