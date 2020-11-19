import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'
import '../css/Login.css'

function LoginComponent(props) {
    let emailInput = React.createRef();
    let passswordInput = React.createRef();

    //MARK: declared variables
    let password = "";
    let email = "";

    //MARK: start logging user in here    
    function startLogin(e){
        e.preventDefault();
        alert("Email Action: "  + email + " Password Action: " + password);
    };

    //MARK: start logging input change
    function onInputChanged(e){
        email = emailInput.current.value
        password = passswordInput.current.value
        console.log("Logging Email: " + email +  " Password: " + password)
    };

  return (
    <div className ="content-wrapper container text-center">
      <div className="login-form">
      <form >
            <h3 className="text-center">Log in</h3>       
            <div className="form-group">
                <input 
                id="email"
                name="email"
                type="email" 
                ref = {emailInput}
                onChange = {onInputChanged}
                className="form-control" 
                placeholder="Email Address" required="required"/>
            </div>
            <div className="form-group">
                <input 
                    id="password"
                    name="password"
                    type="password" 
                    ref = {passswordInput}
                    onChange = {onInputChanged}
                className="form-control" placeholder="Password" required="required"/>
            </div>
            <div className="form-group">
                <button onClick = {startLogin} className="btn btn-primary btn-block">Log in</button>
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