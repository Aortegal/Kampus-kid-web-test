import React, { useEffect, useState } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './modalSignUp.css';


export const Prueba_login = () => {



    function handleSubmit(e) {
        e.preventDefault()
        const {username, password } = e.target.elements
        console.log({username: username.value, password: password.value })
    }

    return (
        
        <>
              
                    <form onSubmit={this.handleSubmit}>
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" /><br />
                        <label for="password">Password</label>
                        <input type="text" id="password" name="password" /><br />

                        <input type="submit" value="Submit" />
                    </form>
    
        </>
    );
}

