import React, {Component} from "react";
import {Form, Button, Col, Container, Row} from 'react-bootstrap'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';

const Wrapper = styled.section`
  padding: 4em;
  padding-top: 10em;
  background-image: url("https://mdbootstrap.com/img/Photos/Others/gradient2.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContainerStyled = styled(Container)`
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  margin-top: 3%;
  padding: 3%;
`;
const ButtonLeft = styled(Button)`
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #f8f9fa;
  width: 60%;
  font-weight: bold;
  color: #383d41;
`;

const ColRight = styled(Col)`
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
`;
const ButtonReg = styled(Button)`
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #0062cc;
  color: #fff;
`;
class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password:"",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref("users")
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          console.log(createdUser);
          this.saveUser(createdUser).then(() => {
            console.log("user saved");
          });
        })
        .catch(err => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        });
    }
  };
  
  saveUser = createdUser => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      username: this.state.firstName + " " + this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      type: "freemium",
      balance: 0
    });
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    // } else if (!this.isPasswordValid(this.state)) {
    //   error = { message: "Password is invalid" };
    //   this.setState({ errors: errors.concat(error) });
    //   return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ firstName, lastName, email, phone, password}) => {
    return (
      !firstName.length ||
      !lastName.length ||
      !email.length ||
      !phone.length ||
      !password.length 
    );
  };

  // isPasswordValid = ({ password, passwordConfirmation }) => {
  //   if (password.length < 6 || passwordConfirmation.length < 6) {
  //     return false;
  //   } else if (password !== passwordConfirmation) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  // displayErrors = errors =>
  //   errors.map((error, i) => <p key={i}>{error.message}</p>);;

  // handleInputError = (errors, inputName) => {
  //   return errors.some(error => error.message.toLowerCase().includes(inputName))
  //     ? "error"
  //     : "";
  // };
 
  render() {
    return(
      <Wrapper>
        <ContainerStyled className="mt-3 rounded shadow-lg">
          <Row>
            <Col md={3} className="register-left text-white text-center pt-5 border-right border-warning">
              <h3>Bienvenido</h3>
              <p>Estas a unos cuantos segundos de poder agilizar y controlar tus deudas de una manera bastante sencilla!</p>
              <ButtonLeft type="submit" className="my-5"><Link to="/login" className="text-white">Login</Link></ButtonLeft>
            </Col>
            <ColRight md={9} className="register-right">
              <h3 className="font-weight-bold text-center mt-4">Registrarse</h3>
              <Form className="p-5 mt-3" onSubmit={this.handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombre(s)</Form.Label>
                    <Form.Control type="text" placeholder="FirstName" onChange={this.handleChange} name="firstName" required/>
                  </Form.Group>
  
                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Apellido(s)</Form.Label>
                    <Form.Control type="text" placeholder="LastName" name="lastName" onChange={this.handleChange} required/>
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="example@domain.com" name="email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Row>
                  <Form.Group controlId="formGridPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control placeholder="(XXX)XXX-XX-XX" required type="tel" name="phone" onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" name="password" required onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSubmit" className="text-center my-auto" >
                    <ButtonReg type="submit"><Link></Link>Registrar</ButtonReg>
                  </Form.Group>
                </Form.Row>
              </Form>
            </ColRight>
          </Row>
        </ContainerStyled>
      </Wrapper>
    );
  }
}

export default Register;
