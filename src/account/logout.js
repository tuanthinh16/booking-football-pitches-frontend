import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';


function Logout() {
    const nav = useNavigate();
    
    localStorage.removeItem('usr');
    if(localStorage.getItem('token')){
        localStorage.removeItem('token');
    }
    else{
        nav('/');
    }
    
    window.location.reload(true);
    return ( 
        <h1>Hi</h1>
     );
}

export default Logout;