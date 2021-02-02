import React, { Component } from 'react'
import axios from 'axios'

class EmployeeList extends Component {
    state = {
        employees: []
    }

    async componentDidMount() {
        // let response = await axios.get('https://reqres.in/api/users?per_page=5')
        let response = await (await fetch('https://reqres.in/api/users?per_page=5')).json()
        this.setState({ employees: response.data})
    }
    

    render() {
        const { employees } = this.state;
        let employeeList;
        employeeList = employees.map(employee => {
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