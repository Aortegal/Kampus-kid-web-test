import React, { useEffect, useState } from 'react';
import { Image } from 'primereact/image';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './modalSignUp.css';


export const FormikFormStudents = () => {
    var [sign, setSign] = useState([]);
    var [usuario, setUsuario] = useState();
    var [contrasena, setContrasena] = useState();
    var [email, setEmail] = useState();
    var [role, setRole] = useState(0);


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
        mutation createuser {
            signup(data: {
              username: "${usuario}",
              email: "${email}",
              password: "${contrasena}",
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

        

    }

    console.log(sign);

    return (
        <>
            <div className="container" style={{ display: 'flex' }}>
                <div className="col 8" style={{ display: 'flex', flexDirection: "column", textAlign: "center", marginTop: "80px", justifyContent: "space-between" }}>
                    <div style={{ display: 'flex', flexDirection: "column", textAlign: "center", justifyContent: "center", padding: "10px 45px 10px 45px" }}>
                        <h3 style={{ textAlign: "center" }}>Sign Up</h3><br /><br />
                        <form onSubmit={handleSubmit} >
                            <input className="form-control" type="text" id="username" name="username" placeholder="Username" /><br />
                            <input className="form-control" type="text" id="correo" name="correo" placeholder="E-mail Address" /><br />
                            <input className="form-control" type="text" id="password" name="password" placeholder="Password" /><br />
                            <input className="form-control" type="text" id="rol" name="rol" placeholder="Role" /><br />
                            <br />
                            <button className="btn btn-lg button-submit" type="submit" value="Submit" style={{ textAlign: "center" }}> Create Account</button>
                        </form><br /><br /><br />
                    </div>
                    <div style={{ borderTop: "solid 2px", margin: "0px -19px 0px -32px", paddingTop: "15PX" }}>
                        <p>Already have an account? <b>Sign in now</b></p>
                    </div>
                </div>
                <div className="col 4" style={{ display: 'flex', backgroundColor: "#708C78", marginRight: "-24px", justifyContent: "center", borderLeft: "solid 2px" }}>
                    <Image className="img-fluid" src="/images/group 11.png" alt="group11" style={{  marginBottom: "60px", marginTop:"60px", maxWidth: "70%", maxHeight:"100%"  }}/>
                    {/* <img className="img-fluid" src="/images/group 11.png" style={{ marginBottom: "60px", marginTop:"60px", maxWidth: "70%", maxHeight:"100%" }} /> */}
                </div>
            </div>
        </>
    );
}
