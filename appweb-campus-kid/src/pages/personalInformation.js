import React, { useEffect, useState} from "react";

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

const GET_STUDENTS = `
  query allStudents {
    getStudents {
      id
      name
      email
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
          body: JSON.stringify( { query : GET_GRADES})
        }).then((response) => response.json()) 
        .then((data) => setStudents(data))
      }, []);
  
    const handleClick = () => {
      setIsDisabled(!isDisabled)
    };
    
    // const algo = students.map(function(x){
    //     return x;
    // });
    // console.log(algo);


    return(
        <>
        <div>
            {/* <h3>HELLO</h3>
            <pre>
                {JSON.stringify(students, null, 2)}
                {console.log(JSON.stringify(students, null, 2))}
            </pre> */}
            {/* {console.log(students)}
            <ul>
                {students.map(x => {
                    return(
                    <li key={x.id}>
                        {x.enrollment}
                    </li>
                    );
                })}
            </ul> */}
            {/* {students.map(x => {
                <p>{x.enrollment}</p>
            })} */}
        </div>
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
                                <form>                                    
                                    <h5 className="card-title">Full Name</h5>
                                    <input type="text" className="form-control" placeholder="username" disabled={true} />
                                    <h5 className="card-title">Email Addres</h5>
                                    <input type="text" className="form-control" placeholder="email" disabled={true} />
                                    <h5 className="card-title">Faculty</h5>
                                    <input type="text" className="form-control" placeholder="faculty" disabled={true} />
                                    <h5 className="card-title">Career</h5>
                                    <input type="text" className="form-control" placeholder="career" disabled={true} />
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