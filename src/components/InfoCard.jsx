import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

// Needs to inherit props.

const InfoCard = (props) => {

  let employee = props.employee

  return (

    <Card>
      <Image src={employee.avatar} wrapped ui={false} />
      <Card.Description>
        {employee.email}
      </Card.Description>
    </Card>
  )
}
export default InfoCard