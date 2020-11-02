//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function App() {
  return (


<div className="container" >  
<h1> Sign In</h1>
     <div className="centre"> 
  <Form className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter text" />
   
  </Form.Group>
  </Form>

  <Form className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter text" />
   
  </Form.Group>
  </Form>

  <Form className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="Enter text" />
   
  </Form.Group>
  </Form>

  
  <Form className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Adress</Form.Label>
    <Form.Control type="text" placeholder="Enter text" />
   
  </Form.Group>
  </Form>

  <Form className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Message</Form.Label>
    <Form.Control type="text" placeholder="Enter text" />
   
  </Form.Group>
  </Form>

<Form className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password again</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


</div> 
    </div>
  );
}

export default App;
