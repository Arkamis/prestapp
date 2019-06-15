import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import * as serviceWorker from './serviceWorker';

import firebase from "./firebase";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


class Root extends React.Component {
  componentDidMount() {
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     // console.log(user);
    //     this.props.setUser(user);
    //     this.props.history.push("/");
    //   } else {
    //     this.props.history.push("/login");
    //     this.props.clearUser();
    //   }
    // });
  }

  render() {
    return(
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
