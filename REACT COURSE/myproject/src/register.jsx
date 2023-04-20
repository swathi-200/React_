import './App.css';
import {Button} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Navigate,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

function Register()
{
    const [UserName, setUserName] = useState('');
    const [EmailID, setMailID] = useState('');
    const [Gender, setGender] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfrimPassword, setConfrimPassword] = useState('');
   
    const[redirect,setRedirect]=useState(false);
    const[navigation,setNavigate]=useState(false);
    const navigate = useNavigate();


    function RegisterSubmit()
    {
        console.log('UserName:',UserName);
        console.log('email id:',EmailID);
        console.log('Gender is:',Gender);
        console.log('Password is:',Password);
        console.log('Confirm Password is:',ConfrimPassword);
        
        if(UserName=='swathi' && EmailID=='swathi@com')
        {
          Cookies.set('name:',UserName);
          Cookies.set('Email',EmailID);
          Cookies.set('gender',Gender);
         // navigate('/Profile',{state:{Name:UserName,Email:EmailID,Gender:Gender}});
         setRedirect(true);
        }
        else
        {
           toast("Incorrect username and emailid ")
        }
      }
    if(redirect)
     {
       return(
           <Navigate to="/Home" replace={true} />
   
       );
       }
       function LoginSubmit()
       {
        setNavigate(true);
       }
       if(navigation)
       {
         return(
             <Navigate to="/" replace={true} />
     
         );
         }
    return (

        <div className="App">
          <h2>WELCOME TO Register page</h2>
          <label>Name:</label>
        <input type="text" name="user" onChange={e => setUserName(e.target.value)} placeholder='enter a text'/><br /><br />
        <label>Email ID:</label>
        <input type="text" name="mail" onChange={e => setMailID(e.target.value)} placeholder='enter a mailId'/><br /><br />
        <label>Gender:</label>
        <input type="text" name="mail" onChange={e => setGender(e.target.value)} placeholder='enter a Gender'/><br /><br />
        <label>Password:</label>
        <input type="text" name="pwd" onChange={e => setPassword(e.target.value)} placeholder='enter a password'/><br /><br />
        <label>Confrim Password:</label>
        <input type="text" name="mail" onChange={e => setConfrimPassword(e.target.value)} placeholder='enter a  Confrim password'/><br /><br />
  
          <marquee direction="left"><Button className='rigsterpage' onClick={RegisterSubmit}>Register</Button></marquee>
          <marquee direction="right"><Button className='loginpage' onClick={LoginSubmit}>Login</Button> <br /></marquee> 
          
           <ToastContainer />
    </div>
          
      );
}
export default Register;