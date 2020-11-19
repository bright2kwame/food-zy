import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import '../css/Login.css'

function LoginComponent(props) {

function startLogin(){
    alert("Login Action");
}

  return (
    <div className ="content-wrapper container text-center">
      <div className="login-form">
      <form>
            <h2 className="text-center">Log in</h2>       
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email Address" required="required"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required="required"/>
            </div>
            <div className="form-group">
                <button onClick ="{startLogin}" className="btn btn-primary btn-block">Log in</button>
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

export default LoginComponent;