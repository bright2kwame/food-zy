import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'
import '../css/Home.css'
import {
  Link
} from "react-router-dom";


class HomeBaseComponent extends React.Component {
    
    //MARK: start when page loads
    constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: ''
      };
      //MARK: binding views
      this.onInputChanged = this.onInputChanged.bind(this);
      this.startLogin = this.startLogin.bind(this);
    }
    
    //MARK: when input changes
    onInputChanged(event) {
       console.log("PASSING: " + event.target.name)
       this.setState({
         [event.target.name]: event.target.value
        });
        console.log("Logging Email: " + this.state.email +  " Password: " + this.state.password)
    }
  
    //MARK: handle user login action
    startLogin(event) {
      alert('A name was submitted: ' + this.state.email);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className ="content-wrapper container text-center">
        <h1>{this.state.email}</h1>
        <div className="login-form">
        <form onSubmit={this.handleSubmit} >
              <h3 className="text-center">Log in</h3>       
              <div className="form-group">
                  <input 
                  id="email"
                  name="email"
                  type="email" 
                  value={this.state.email}
                  onChange = {this.onInputChanged}
                  className="form-control" 
                  placeholder="Email Address" required="required"/>
              </div>
              <div className="form-group">
                  <input 
                    id="password"
                    name="password"
                    type="password" 
                    value={this.state.password}
                    onChange = {this.onInputChanged}
                  className="form-control" placeholder="Password" required="required"/>
              </div>
              <div className="form-group">
                  <button onClick = {this.startLogin} className="btn btn-primary btn-block">Log in</button>
              </div>
              <div className="clearfix">
                  <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
                  <a href="#" className="float-right">Forgot Password?</a>
              </div>        
          </form>
         <p className="text-center"><a href="#">Create an Account</a></p>
      </div>
      </div>
      );
    }
  }


  export default HomeBaseComponent;