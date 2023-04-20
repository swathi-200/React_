import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Navigate,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'



function Login() {
  
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const[redirect,setRedirect]=useState(false);
    const navigate = useNavigate();



   

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document` title using the browser API
    // document.title = `You clicked ${count} times`;
  });
  function SetValue(value)
  {
     setPassword(value);
      console.log('Password',Password);

  }
  function LoginSubmit()
  {
    console.log('UserName',UserName);
    console.log('Password',Password);
    if(UserName=='swathi' && Password=='123')
    {
      Cookies.set('Name',UserName);
      setRedirect(true);
    

    }
  else
  {
    console.log('incorrect username and password');
    toast("incorrect username and password")

  }


  }
  if(redirect)
  {
    return(
        <Navigate to="/Home" replace={true} />

    );

  }
  return (

    <div className="App">
      <h2>WELCOME TO Login page</h2><br />
      <label>Name:</label>
    <input type="text" name="user" onChange={e => setUserName(e.target.value)}placeholder='enter a text'/><br /><br />
    <label>Password:</label><input type="text" name="pwd" onChange={e => SetValue(e.target.value)} placeholder='enter a password'/><br/>
    <Button className="loginpage" onClick={LoginSubmit}>Login</Button> 
       <ToastContainer />
    
      </div>
  );
}

export default Login;
