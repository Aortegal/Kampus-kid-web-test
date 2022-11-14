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





export const FormikFormStudentsLogin = () => {
    var [login, setLogin] = useState([]);
    var [usuario, setUsuario] = useState();
    var [contrasena, setContrasena] = useState();


    function handleSubmit(e) {
        e.preventDefault()
        var { username, password } = e.target.elements
        console.log({ username: username.value, password: password.value })
        setUsuario(username.value);
        setContrasena(password.value);
        mutacion();

    }

    function mutacion() {
        const GET_LOGIN = `
        mutation signin_prueba{
            login(data: { username: "${usuario}" , password:"${contrasena}" }) {
            id
            roles
            email
            username
            accestoken
        }
    }
    `
        fetch("http://localhost:4011/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: GET_LOGIN })
        }).then(response => response.json())
            .then(data => setLogin(data.data.login))

    }

    console.log(login);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" /><br />
                <label for="password">Password</label>
                <input type="text" id="password" name="password" /><br />
                <input type="submit" value="Submit" />
                <p>Su usuario es {usuario}</p>
                <script>
                    console.log("hola");
                </script>
            </form>

        </>
    );
}
