import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { location,useLocation } from "react-router-dom";
import { Navigate,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
  
function Home() {
    
 const[redirect,setRedirect]=useState(false);
 const[dirct,setdirct]=useState(false);
 const location= useLocation();
 const navigate = useNavigate();

 useEffect(() => {
  
  

      toast('login successful')
  // Update the document` title using the browser API
  // document.title = `You clicked ${count} times`;
});
 function Logout()
 {
  setdirct(true);
 }
 if(dirct)
  {
    return(
        <Navigate to="/" replace={true} />
      
  );
}

  function ProfileLogin()
{
  setRedirect(true);
  
}
if(redirect)
{
  return(
    <Navigate to="/Profile" replace={true}/>
    

  );

}

  return (

    <div className="App">

      <h2 >WELCOME TO Home page</h2>
      <div>
      <Button className='rigsterpage' onClick={Logout}>Logout</Button>
      <Button className='profilepage' onClick={ProfileLogin}>Profile</Button> 
       
      </div>
      <table border={3}>
        <thead>
          <tr>
          <th> SLNO</th>
          <th>STD NAME</th>
          <th>Subject 1</th>
          <th>Subject 2</th>
          <th>Subject 3</th>
          <th>Subject 4</th>
          <th>Marks 1</th>
          <th>Marks 2</th>
          <th>Marks 3</th>
          <th>Marks 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{Cookies.get('Name')}</td>
            <td>Kannada</td>
            <td>English</td>
            <td>Hindhi</td>
            <td>Social-Science</td>
            <td>90</td>
            <td>99</td>
            <td>100</td>
            <td>90</td>
         </tr>
        </tbody>
      </table>
    
       <ToastContainer />
      
      </div>
      

  );

}

export default Home;
