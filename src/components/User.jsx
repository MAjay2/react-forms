import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function User(props) {
  return (
    <Col md="4"> 
         <Card >
      <Card.Body>
        <Card.Title>
            
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Company name</Card.Subtitle>
        <Card.Text>
          <p>Name:{props.userInfo.name}</p>
       <p> Email:{props.userInfo.email}</p> 
        <p>Gen:{props.userInfo.gen}</p>
        </Card.Text> 
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
    </Col>
  )
}
 