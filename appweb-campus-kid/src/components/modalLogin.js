import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { Image } from 'primereact/image';
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
    var [rol, setRol] = useState();


    function handleSubmit(e) {
        e.preventDefault()
        var { username, password } = e.target.elements
        setUsuario(username.value);
        setContrasena(password.value);
        mutacion();

        console.log(login);
        if (login != undefined) {
            if (login.roles[0] == "ROLE_MODERATOR") {
                window.location = `/teacher`
            } else if (login.roles[0] == "ROLE_USER") {
                window.location = `/student`
            }
        } else {
            alert("Check credentials, login invalid");
        }


    }

    async function mutacion() {
        const GET_LOGIN = `
        mutation signin_prueba{
            login(data: { username: "${usuario}" , password:"${contrasena}" }) {
            id
            roles
            email
            username
        }
    }
    `
        const respuesta = await fetch("http://localhost:5000/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: GET_LOGIN })
            })
                .then(response => response.json())
                .then(data => setLogin(data.data.login))

        console.log(login);

        respuesta();    
    }




    return (
        <>
            <div className="container" style={{ display: 'flex' }}>
                <div className="col 8" style={{ display: 'flex', flexDirection: "column", textAlign: "center", marginTop: "110px", justifyContent: "space-between" }}>
                    <div style={{ display: 'flex', flexDirection: "column", textAlign: "center", justifyContent: "center", padding: "10px 45px 10px 45px" }}>
                        <h3 style={{ textAlign: "center" }}>Login</h3><br /><br />
                        <form onSubmit={handleSubmit} >
                            <div className="form-group">
                                <input className="form-control" type="text" id="username" name="username" placeholder="Username" /><br />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" id="password" name="password" placeholder="Password" /><br />
                            </div><br />
                            <button className="btn btn-lg button-submit" type="submit" value="Submit" style={{ textAlign: "center" }}> Submit</button>
                        </form>
                    </div>
                    <div style={{ borderTop: "solid 2px", margin: "0px -10px 0px -32px", paddingTop: "15PX" }}>
                        <p>Don't have an account ? <b>Sign up now</b></p>
                    </div>
                </div>
                <div className="col 4" style={{ display: 'flex', backgroundColor: "#D9D9D9", marginRight: "-24px", justifyContent: "center", borderLeft: "solid 2px" }}>
                    <Image className="img-fluid" src="/images/group 14login.png" alt="group14login" style={{   marginBottom: "60px", maxWidth: "60%"  }}/>
                    {/* <img className="img-fluid" src="/images/group 14login.png" style={{ marginBottom: "60px", maxWidth: "60%" }} /> */}
                </div>
            </div>
        </>
    );
}
