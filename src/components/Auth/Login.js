import React from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/styles';
import { Avatar, Button, CssBaseline, TextField,
         FormControlLabel, Checkbox, Link, Grid, Box,
         Typography, Paper} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    height: '100vh',
  },
  spacing: [0, 2],
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 3,
    backgroundColor: theme.palette.secondary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 5,
  },
  submit: {
    margin: 3,
  },
});

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
    const {classes} = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>;
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
