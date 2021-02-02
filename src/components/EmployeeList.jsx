import React from 'react'
import { Item, Button } from 'semantic-ui-react'
// import axios from 'axios'


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
            <Button size='tiny' floated='right'>More Info</Button>
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