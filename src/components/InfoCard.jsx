import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

// Needs to inherit props.

const InfoCard = (props) => {
        
    let employee1 = props.employees[0];
    debugger
    return (
        // this.makeCard()
        <Card>
            <Image src={props && props.employees[0]} wrapped ui={false}/>
            <Card.Description>
                    
            </Card.Description>
        </Card>
    )
}
export default InfoCard