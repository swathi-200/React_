import React from 'react';
import { location,useLocation } from "react-router-dom";
import { Navigate,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Profile()
{
    const location= useLocation();
 const navigate = useNavigate();

    return(
        <div>
       <p>The name is {Cookies.get('name')}</p>
       <p>Email is {Cookies.get('Email')}</p>
       <p>Gender is {Cookies.get('gender')}</p>
      
        {/* <p>name:{location.state.Name}</p>
       <p>EmailID:{location.state.Email}</p>
       
       */}
       
       </div>
    );

}
export default Profile;