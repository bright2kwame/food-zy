import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'
import '../css/Login.css'

//MARK: handle component 
function LoginComponent(props) {
    const [state, setState] = React.useState({
        email: "",
        password: ""
    })

    // let emailInput = React.createRef();
    // let passswordInput = React.createRef();

    //MARK: declared variables
    // let password = "";
    // let email = "";

    //MARK: start logging user in here    
    function startLogin(event){
        event.preventDefault();
        alert("Email Action: "  + state.email + " Password Action: " + state.password);
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
      <form >
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
                <a href="#" className="float-right">Forgot Password?</a>
            </div>        
        </form>
       <p className="text-center"><a href="#">Create an Account</a></p>
    </div>
    </div>
  );
}

export default LoginComponent;