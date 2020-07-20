import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';

import axios from 'axios';
import Students from './components/pages/crud/Students';
import Login from './components/pages/login/Login';

class App extends Component {
  state = {
    students: [
      {
        "name": "Angie",
        "lastName": "Bernette",
        "dni": "115-93-5232",
        "email": "abernette0@ehow.com",
        "mobile": "+46 450 619 3810"
      },
      {
        "name": "Demetra",
        "lastName": "Jacson",
        "dni": "737-96-7093",
        "email": "djacson1@bizjournals.com",
        "mobile": "+351 412 218 3520"
      },
      {
        "name": "Tadeas",
        "lastName": "Daile",
        "dni": "863-09-2467",
        "email": "tdaile2@hatena.ne.jp",
        "mobile": "+86 875 877 8320"
      },
      {
        "name": "Meredith",
        "lastName": "Dunklee",
        "dni": "648-12-1358",
        "email": "mdunklee3@furl.net",
        "mobile": "+84 245 763 6437"
      }
    ],
    token: '',
    isAuthenticated: false
  }

  setToken = (token) => {
    this.setState({
      token,
      isAuthenticated: true
    });
  }

  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" render={(props) => (
            <Login {...props} setToken={this.setToken.bind(this)} isAuthenticated={this.state.isAuthenticated}/>
          )}/>
          <Route exact path="/students">
            <Students students={this.state.students} token={this.state.token} isAuthenticated={this.state.isAuthenticated}/>
          </Route>
          <Route path="/students/:id">
            asdasd
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
