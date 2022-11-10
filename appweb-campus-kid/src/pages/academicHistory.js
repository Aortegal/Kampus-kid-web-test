import React, { useEffect, useState} from "react";
import './pages.css';

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

function AcademicHistory() {
    const [grades, setGrades] = useState([]);

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
            <div className="titles-container">
                <h5>Academic History</h5>
            </div>
            <div className="container-section">
                <h5>Carreer Name</h5>
                <h4>Faculty</h4>
                <hr class="solid"></hr>
                <h5>Summary</h5><br />
                
                        <row style={{ display: 'flex' }}>
                            <div style={{textAlign: 'center', width:"20%", marginRight:"30px" }}>
                                <div className="card-header orange card-notas">P.A.P.A</div>
                                <div className="card-body" style={{backgroundColor:'#ece3dc'}}>
                                    <p className="card-title">4.1</p>
                                </div>
                            </div>
                        </row>
                    

                <hr class="solid"></hr>

                <h5>Grades</h5>

                <div className="card border-0">
                    <div className="card-body">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="table-responsive-xl">
                                    <table className="table">
                                        <thead className="thead-dark" style={{ backgroundColor: '#FA7D4F'}}>
                                            <tr>
                                                <th scope="col">Class</th>
                                                <th scope="col">Credits</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Period</th>
                                                <th scope="col">Grade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Multivariable Calculus</th>
                                                <td>4</td>
                                                <td>Obligatory</td>
                                                <td>2022-2</td>
                                                {grades.map((t) => {
                                                    return (
                                                        <td>{t.grade}</td>
                                                    )
                                                })}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default AcademicHistory;