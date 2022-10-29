import React from "react";

function TeacherGrades() {
    return (
        <>

        
            <div className="titles-container">
                <h5>Grading Platform</h5>
            </div>
            <div className="container-section">
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-text">Select a group</h5>
                        <br />

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
                                                <th data-editable="true" scope="col">Grade</th>
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

export default TeacherGrades;