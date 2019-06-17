import React from "react";
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Form, Button} from "react-bootstrap";
import firebase from '../../firebase';
class Login extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
      loading: false
    };
  }  
  
  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
          console.log(signedInUser);
        })
        .catch(err => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        });
    }
  }
  isFormValid = ({ email, password }) => email && password;

  render() {
    return (
      <div className="bgLogin">
        <Container className="h-50 w-50 d-flex" xs={"mx-0 my-0"}>
          <Row className="row align-self-center w-100">
            <Col className="d-none d-md-block md-6 mx-auto p-0 rounded">
              <Image src="https://m.blog.hu/ma/magyartakarek/image/how-to-control-debt-web-1288x724.png" rounded fluid alt="imposible to charge"/>
            </Col>
            <Col md="6" className="mx-auto bg-white rounded-right">
              <h3 className="my-2 text-center">Bienvido a PrestApp</h3>
              <Form className="my-5" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>N&uacute;mero de Celular</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu Email" name="email" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Text className="text-muted text-right">
                <p>A&uacute;n no tienes cuenta?, <Link to="/register">Registrate GRATIS!</Link></p>
                </Form.Text>
                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Login;
