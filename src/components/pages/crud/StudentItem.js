import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export class StudentItem extends Component {
    static propTypes = {

    }

    render() {
        const { name, lastName, dni } = this.props.student;
        return (
            <React.Fragment>
            <tr>
                <td>{lastName}, {name}</td>
                <th scope="row">{dni}</th>
                <td class="dropdown">
                    <Link to={`/students/${dni}`}>
                        <button 
                            type="button" 
                            className="btn btn-secondary"
                            data-toggle="collapse"
                            data-target={"#collapse"+dni}
                            aria-controls={"collapse"+dni}
                        >Dropdown</button>
                    </Link>
                </td>
            </tr>
            </React.Fragment>
        )
    }
}

export default StudentItem
