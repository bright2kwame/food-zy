import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'
import '../css/Login.css'
import { Link } from 'react-router-dom';

//MARK: handle component 
function LoginComponent(props) {
    const [state, setState] = React.useState({
        email: "",
        password: ""
    })
    //MARK: start logging user in here    
    function startLogin(event){
        event.preventDefault();
        let emailToPost = state.email;
        let passwordToPost = state.password;

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

    //MARK: component html section
  return (
    <div className ="content-wrapper container text-center">
      <div className="login-form">
      <form>
            <h3 className="text-center">Log in</h3>       
            <div className="form-group">
                <input 
                name="email"
                type="email" 
                //ref = {emailInput}
                value = {state.email}
                onChange = {onInputChanged}
                className="form-control" 
                placeholder="Email Address" required="required"/>
            </div>
            <div className="form-group">
                <input 
                    name="password"
                    type="password" 
                  //  ref = {passswordInput}
                    value = {state.password}
                    onChange = {onInputChanged}
                className="form-control" placeholder="Password" required="required"/>
            </div>
            <div className="form-group">
                <button onClick = {startLogin} className="btn btn-primary btn-block">Log in</button>
            </div>
            <div className="clearfix">
                <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
                <Link className="float-right">Forgot Password?</Link>
            </div>        
        </form>
       <p className="text-center"> New Here ? <Link to="/register" >Create an Account</Link></p>
    </div>
    </div>
  );
}

export default LoginComponent;