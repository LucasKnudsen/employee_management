import React from 'react'
import { Item, Button } from 'semantic-ui-react'
// import axios from 'axios'


const EmployeeList = ({ employees: list, children }) => {

  let employeeList;
  employeeList = list.map(employee => {
    return (
      <Item >
        <Item.Image size="tiny" src={employee.avatar} />
        <Item.Content verticalAlign='middle'>
          <Item.Header>{employee.first_name} {employee.last_name}</Item.Header>
          <Item.Description>
            {employee.email}
          </Item.Description>
          <Item.Extra>
            <Button floated='right'>Action</Button>
        </Item.Extra>
        </Item.Content>
      </Item>

    )
  });

  return (
    <Item.Group>
      {employeeList}
    </Item.Group>
  )
}
export default EmployeeList