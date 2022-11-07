import React, { useEffect, useState, Component } from 'react';
import { graphql } from 'react-apollo';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './modalSignUp.css';
import { header } from './Header.js';
import ReactDOM from "react-dom";

export  const Appi = () => { 
  const [user, setUser] = useState([]);

  const requestOfferInfo= async () => {        
    const url = "http://localhost:4011/api";
    return await fetch(url,{            
        method : 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({ signin })         
    })
    .then((response) => response.json()).catch(error=> console.log(error));
};

  useEffect(() => {
    requestOfferInfo();
  },[])

  return (
    <>

    <ul>
      {this.state.data.signin.map((x) => (
        <li key={x.id}>  <strong>{x.email}</strong></li>
        ))}
    </ul>

      {/*<h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
        </ul>*/}
    </>
  );
}


