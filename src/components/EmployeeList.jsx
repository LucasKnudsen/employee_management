import React, { Component } from 'react'
import axios from 'axios'

class EmployeeList extends Component {
    state = {
        employees: []
    }
    
    render() {
        const { employees } = this.state;
        const employeeList = employees.map(employee => {
            return (
                <li key={employee.id}>
                    {`${employee.first_name} ${employee.last_name}`}
                </li>
            )
        });
        
        return (
            <ul role="list">
                {employeeList}
            </ul>
        )
    }
}
export default EmployeeList