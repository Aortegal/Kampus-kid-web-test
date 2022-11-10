import React, { useEffect, useState } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './modalSignUp.css';

const GET_GRADES = `
  query allGrades {
    getGrades {
      id
      enrollment
      description
      grade
      percentage
    }
  }
`

export const Probando = () => {
    const [grades, setGrades] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:4011/api", {
  //       method:"POST",
  //       headers:{ "Content-Type": "application/json"},
  //       body: JSON.stringify( { query : GET_GRADES})
  //     }).then(response => response.json()) 
  //     .then(data => setGrades(data))
  // }, []);

  useEffect(() => {
    fetch("http://localhost:4011/api", {
      method:"POST",
      headers:{ "Content-Type": "application/json"},
      body: JSON.stringify( { query : GET_GRADES})
    }).then(response => response.json()) 
    .then(data => setGrades(data.data.getGrades))
}, []);



    return (
      <>
        <div className="card border-light d-block my-auto">

              {/* <div className="card-body">
                  <h5 className="card-title">Información de contacto</h5>
                  <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1"></span>
                      <input id="roles" type="text" className="form-control" placeholder={datos.id} aria-label="id" aria-describedby="basic-addon1" disabled=""/>
                      
                  </div>
              </div> */}
              <div>
              {
                grades.map((t) => {
                return (
                  <p key={t.id}>
                  {t.enrollment}
                  </p>
                )
              })}
              </div>

              <pre>
                {JSON.stringify(grades, null, 2)}
              </pre>

              {
                grades.map((t) => {
                return (
                  <p key={t.id}>
                  {t.name}
                  </p>
                )
              })}

        </div>
      </>
    );
}