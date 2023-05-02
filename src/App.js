import React,{Component} from 'react';
import { Container,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from './components/Users';
import UserForm from './components/UserForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[
        {
          name:"Mickey",
          email:"mickey@gmail",
          gen:21

        },
        {
          name:"kaba",
          email:"kaba@gmail",
          gen:22

        },
        {
          name:"kofi",
          email:"kofi@gmail",
          gen:25

        }
      ]
    }
  }
   
    
    addNewUser=(user)=>{
    this.setState({
      users:[...this.state.users,user]
    })
  }
  render(){
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
            <UserForm
            addUser={this.addNewUser}
            />
            </Col>
          <Col>
          <Users 
          usersData= {this.state.users}
          />
          </Col>
        </Row>

      </Container>
    </>
    
  );
  }
}

export default App;
