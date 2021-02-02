import React from 'react'
import { Item, Button } from 'semantic-ui-react'
import EmployeeModal from './EmployeeModal'


const EmployeeList = ({ employees }) => {


  let employeeList = employees.map(employee => {

    return (
      <Item key={employee.id} className="bordered" >
        <Item.Image size="tiny" src={employee.avatar} />
        <Item.Content verticalAlign='middle'>
          <Item.Header>{employee.first_name} {employee.last_name}</Item.Header>
          <Item.Description>
            {employee.email}
          </Item.Description>
          <Item.Extra >
            <EmployeeModal employee={employee} />
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  });

  return (
    <Item.Group role="list" className="list-container">
      {employeeList}
    </Item.Group>
  )
}
export default EmployeeList