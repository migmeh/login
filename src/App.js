import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import BoardUser from "./components/board-user.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser} = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <h1 className='welcome'>Welcome</h1>
          <div className="navbar-nav mr-auto">

            {currentUser && (
              <li className="nav-item">
                <a href={"/content"} className="nav-link">
                  Content
                </a>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="nam">{currentUser.username}</span>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href={"/login"} className="nav-link">
                  Login
                </a>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <BrowserRouter>
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route path="/content" component={BoardUser} />
          </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
