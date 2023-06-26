import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../slices/usersSlice';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      contact: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: '',
      location: '',
      contact: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            value={this.state.name}
            name="name"
            type="name"
            placeholder="Enter your name"
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control
            value={this.state.location}
            name="location"
            type="text"
            onChange={this.handleChange}
            placeholder="location"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            value={this.state.contact}
            name="contact"
            type="Number"
            onChange={this.handleChange}
            placeholder="Contact"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default connect(null, { addUser })(UserForm);
