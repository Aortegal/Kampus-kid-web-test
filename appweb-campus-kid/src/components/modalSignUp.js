import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './modalSignUp.css';
import gql from 'graphql-tag';





export const FormikFormStudents = () => {
    var [sign, setSign] = useState([]);
    var [usuario, setUsuario] = useState();
    var [contrasena, setContrasena] = useState();
    var [email, setEmail] = useState();
    var [role, setRole] = useState();


    function handleSubmit(e) {
        e.preventDefault()
        var { username, password, correo, rol } = e.target.elements
        setUsuario(username.value);
        setContrasena(password.value);
        setEmail(correo.value);
        setRole(rol.value);
        
        mutacion();
    }

    function mutacion() {
        const GET_SIGNUP = `
        mutation CreateUser {
            signup(data: {
              username: "${usuario}",
              email: "${contrasena}",
              password: "${email}",
              role: "${role}"
            }) 
          }
    `
        fetch("http://localhost:4011/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: GET_SIGNUP })
        }).then(response => response.json())
            .then(data => setSign(data.errors))

            console.log(GET_SIGNUP);

    }


    return (
        <>
           

            <form onSubmit={handleSubmit}>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" /><br />
                <label for="password">E-mail</label>
                <input type="text" id="correo" name="correo" /><br />
                <label for="password">Password</label>
                <input type="text" id="password" name="password" /><br />
                <label for="password">Role</label>
                <input type="text" id="rol" name="rol" /><br />
                <input type="submit" value="Submit" />
                <p>Su usuario es {usuario}</p>
    </form>

        </>
    );
}
