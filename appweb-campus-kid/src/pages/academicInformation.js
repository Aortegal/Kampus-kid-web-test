import React from "react";

function AcademicInformation () {
    return (
        <>
            <div className="titles-container">
                <h5>Academic Information</h5>
            </div>
            <div className="container-section">
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Welcome to the campus kid platform!</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Here is a summary of your most important academic information in a simple format:</h6>
                        <br /><br />
                        <h5 className="card-text">Latest grades</h5>
                        <br />
                        <div className="card card-grades mb-3 text-center">
                            <div className="card-header orange">Subject</div>
                            <div className="card-body">
                                <p className="card-title">grade</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Schedule</h5>
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="table-responsive-xl">
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Grade</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Group</th>
                                                <th scope="col">Teacher</th>
                                                <th scope="col">Weekday</th>
                                                <th scope="col">Start Hour</th>
                                                <th scope="col">End Hour</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}

export default AcademicInformation;