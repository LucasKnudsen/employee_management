import React from 'react'
import InfoCard from './InfoCard'
// import axios from 'axios'


const EmployeeList = (props) => {
    
    let employeeList;
    employeeList = props.employees.map(employee => {
        return (
            // <li key={employee.id}>
            //     {`${employee.first_name} ${employee.last_name}`}
            // </li>
            <InfoCard key={employee.id} employee={ employee }/>
        )
    });
    
    return (
        <ul role="list">
            {employeeList}
        </ul>
    )
}
export default EmployeeList