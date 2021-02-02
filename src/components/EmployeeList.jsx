import React from 'react'
// import axios from 'axios'


const EmployeeList = (props) => {
    
    let employeeList;
    employeeList = props.employees.map(employee => {
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
export default EmployeeList