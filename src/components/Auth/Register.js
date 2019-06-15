import React from "react";


class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false
    // usersRef: firebase.database().ref("users")
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   if (this.isFormValid()) {
  //     this.setState({ errors: [], loading: true });
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //       .then(createdUser => {
  //         console.log(createdUser);
  //         createdUser.user
  //           .updateProfile({
  //             displayName: this.state.username,
  //             photoURL: `http://gravatar.com/avatar/${md5(
  //               createdUser.user.email
  //             )}?d=identicon`
  //           })
  //           .then(() => {
  //             this.saveUser(createdUser).then(() => {
  //               console.log("user saved");
  //             });
  //           })
  //           .catch(err => {
  //             console.error(err);
  //             this.setState({
  //               errors: this.state.errors.concat(err),
  //               loading: false
  //             });
  //           });
  //       })
  //       .catch(err => {
  //         console.error(err);
  //         this.setState({
  //           errors: this.state.errors.concat(err),
  //           loading: false
  //         });
  //       });
  //   }
  // };

  saveUser = createdUser => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    });
  };

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? "error"
      : "";
  };

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors,
      loading
    } = this.state;

    return (
        <div>something</div>
      );
  }
}

export default Register;
