import React from 'react';
import User from '../components/User';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Users() {
  const users = useSelector((state) => state.users.users);

  const contactList = users.map((contact) => {
    return <User key={contact.id} contact={contact} />;
  });

  return (
    <Container className='p-3'>
      <Row>{contactList}</Row>
    </Container>
  );
}

export default Users;
