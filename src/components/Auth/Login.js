import React from "react";
import {Container, Row, Col} from "react-bootstrap";
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
    // if (this.isFormValid(this.state)) {
    //   this.setState({ errors: [], loading: true });
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(signedInUser => {
    //       console.log(signedInUser);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       this.setState({
    //         errors: this.state.errors.concat(err),
    //         loading: false
    //       });
    //     });
    // }
  };

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? "error"
      : "";
  };

  render() {
    return (
      <Container fluid className="bgLogin">
        <Row className="justify-content-center bg-white h-25" md={4}>
          <Col  md="4">
            here is the image
          </Col>
          <Col md="4">
          Here is the login
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
