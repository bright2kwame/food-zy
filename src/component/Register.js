import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function RegisterComponent() {

    const [state, setState] = React.useState({
        email: "",
        password: "",
        passwordAgain: ""
    })
   
    //MARK: start logging user in here    
    function startRegistering(event){
        event.preventDefault();
        let emailToPost = state.email;
        let passwordToPost = state.password;
        let passwordAgainToPost = state.passwordAgain;

        alert("Email Action: "  + emailToPost + " Password Action: " + passwordToPost);
    };

    //MARK: start logging input change
    function onInputChanged(event){
       console.log("PASSING: " + event.target.name)
       setState({
        ...state,
         [event.target.name]: event.target.value
        });
        console.log("Logging Email: " + state.email +  " Password: " + state.password)
    };


  return (
    <div className ="content-wrapper container text-center">
      <div className="login-form">
      <form>
            <h3 className="text-center">Create Account</h3>       
            <div className="form-group">
                <input 
                name="email"
                type="email" 
                value = {state.email}
                onChange = {onInputChanged}
                className="form-control" 
                placeholder="Email Address" required="required"/>
            </div>
            <div className="form-group">
                <input 
                    name="password"
                    type="password" 
                    value = {state.password}
                    onChange = {onInputChanged}
                className="form-control" placeholder="Password" required="required"/>
            </div>
            <div className="form-group">
                <input 
                    name="passwordAgain"
                    type="password" 
                    value = {state.passwordAgain}
                    onChange = {onInputChanged}
                className="form-control" placeholder="Confirm Password" required="required"/>
            </div>
            <div className="form-group">
                <button onClick = {startRegistering} className="btn btn-primary btn-block">Register</button>
            </div>       
        </form>
       <p className="text-center">Already have account? <Link to = "/login">Login</Link></p>
    </div>
    </div>
  );
}

export default RegisterComponent;