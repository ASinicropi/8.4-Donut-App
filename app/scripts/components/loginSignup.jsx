var $ = require('jquery');
var React = require('react');

var Template = require('./layout/template.jsx').Template;
var User = require('../models/user.js').User;

var SignUpForm = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      password: ''
    };
  },
  handleEmail: function(e){
    e.preventDefault();

    this.setState({username: e.target.value});
  },
  handlePassword: function(e){
    e.preventDefault();

    this.setState({password: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault():

    var username = this.state.username;
    var password = this.state.password;
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit} id="signup">
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input onChange={this.handleEmail} className="form-control" name="email" id="email" placeholder="Email" value={this.state.username}/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input onChane={this.handlePassword} className="form-control" name="password" id="password" type="password" placeholder="Password" value={this.state.password}/>
        </div>

        <input className="btn btn-primary" type="submit" value="Sign Up!"/>
      </form>
    )
  }
});

var LoginForm = React.createClass({
  render: function(){
    return(
      <form id="login">
        <div className="form-group">
          <label htmlFor="email-login">Email Address:</label>
          <input className="form-control" name="email" id="email-login" type="email" placeholder="email"/>
        </div>

        <div className="form-group">
          <label htmlFor="password-login">Password:</label>
          <input className="form-control" name="password" id="password-login" type="password" placeholder="Password Please"/>
        </div>

        <input className="btn btn-primary" type="submit" value="Login!"/>
      </form>
    );
  }
});

function setHeader(sessionId){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
      xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");

      if(sessionId){
        xhr.setRequestHeader("X-Parse-Session-Token", sessionId);
      }
    }
  });
}

var LoginContainer = React.createClass({
  getInitialState: function(){
    return{
      user: new User()
    };
  },
  signUpNewUser: function(username, password){
    this.state.user.set({username: username, password: password});
    this.state.user.signup();

    setHeader(sessionId);
  },
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Login!</h1>
            <LoginForm/>
          </div>
          <div className="col-md-6">
            <h1>Sign Up!</h1>
            <SignUpForm signUpNewUser={this.signUpNewUser}/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  LoginContainer: LoginContainer
};
