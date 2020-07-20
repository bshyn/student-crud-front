import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StudentsTableBody from './StudentsTableBody'

import auth from '../../helper/auth'
import { withRouter } from 'react-router-dom';
import requests from '../../helper/requests';

export class Students extends Component {

    requests;

    state = {
        students: []
    };

    async componentDidMount(){
        this.requests = new requests(this.props.token);

        await this.requests.getAllStudents(this.setStudents);
    }

    setStudents = (students) => {
        this.setState({students});
    }

    render() {
        if(!this.props.isAuthenticated){
            this.props.history.push("/");
        }
        return (


            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">ID</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <StudentsTableBody students={this.state.students}/>
                </tbody>
            </table>
        )
    }
}

export default withRouter(Students);
