import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'



class UserForm extends Component{
  constructor (props){
  super(props);
  this.state={
    name:"",
    email:"",
    gen:"",


  }
}

  handleChange=(e)=>{
    e.preventDefault()
    
      const { name, value } = e.target;
      this.setState({ [name]: value });
    

  
  }

   handleSubmit=(e)=>{
    e.preventDefault()
   this.props.addUser(this.state)

  }

  render(){
  return (
    
        <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control name="name" type="name"  placeholder="Enter your name" onChange={this.handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" onChange={this.handleChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control name="gen" type="Number" onChange={this.handleChange}  placeholder="What Gen?" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    
  )
}
}

export default UserForm
