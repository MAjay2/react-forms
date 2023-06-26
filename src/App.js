import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from './components/Users';
import UserForm from './components/UserForm';

class App extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="4">
              <UserForm />
            </Col>
            <Col>
              <Users />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
