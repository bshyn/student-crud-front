import React, { Component } from 'react'
import StudentItem from './StudentItem';

export class StudentsTableBody extends Component {
    render() {
        return this.props.students.map((student) => (
            <StudentItem key={student.dni} student={student} />
        ));
    }
}

export default StudentsTableBody
