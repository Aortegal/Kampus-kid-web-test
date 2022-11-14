import React, { useEffect, useState} from "react";
import {a} from "./prueba_uwu";

console.log(a);

const GET_STUDENTS = `
  query allStudents {
    getStudents {
      id
      name
      ${a}
      faculty
      career
    }
  }
`


function PersonalInformation() {
    const [isDisabled, setIsDisabled] = useState(true);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4011/api", {
          method:"POST",
          headers:{ "Content-Type": "application/json"},
          body: JSON.stringify( { query : GET_STUDENTS})
        }).then(response => response.json()) 
        .then(data => setStudents(data.data.getStudents))
    }, []);
  
    const handleClick = () => {
      setIsDisabled(!isDisabled)
    };


    return(
        <>
            <div className="titles-container">
                <h5>Personal information</h5>
            </div>
            <div className="container-section">
                
                
                <div className="row">
                    <div className="col-md-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <h5 className="card-title">Basic information</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card border-0">
                            <div className="card-body">
                            {students.map((t) => {
                                return ( 
                                <form key={t.id}>
                                                                   
                                        <h5 className="card-title">Full Name</h5>
                                        <input type="text" className="form-control" placeholder={t.name} disabled={true} />
                                        <h5 className="card-title">Email Addres</h5>
                                        <input type="text" className="form-control" placeholder={t.email} disabled={true} />
                                        <h5 className="card-title">Faculty</h5>
                                        <input type="text" className="form-control" placeholder={t.faculty} disabled={true} />
                                        <h5 className="card-title">Career</h5>
                                        <input type="text" className="form-control" placeholder={t.career} disabled={true} />
                                </form>
                                )
                            })}
                            
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <h5 className="card-title">Birth Information</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card border-0">
                            <div className="card-body">
                                <form>
                                    <h5 className="card-title">Date of birth</h5>
                                    <input type="date" className="form-control" placeholder="birth" disabled={isDisabled} />
                                    <h5 className="card-title">Place of birth</h5>
                                    <input type="text" className="form-control" placeholder="place" disabled={isDisabled} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <h5 className="card-title">Contact Information</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card border-0">
                            <div className="card-body">
                                <form>
                                    <h5 className="card-title">Cellphone</h5>
                                    <input type="number" className="form-control" placeholder="cell" disabled={isDisabled}  />
                                </form>
                            </div>
                        </div>
                        <br /><br />
                        <button type="button" className="btn boton-gris-sm text-center" onClick={handleClick}>
                            Modify personal information
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalInformation;