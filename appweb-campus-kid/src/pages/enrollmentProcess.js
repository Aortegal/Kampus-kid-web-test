import React from "react";
import { FormikFormStudentsEnrollment } from "../components/modalEnrollment";

function EnrollmentProcess() {
    return (
        <>
            <div className="modal fade modal-xl" id="modalEnroll" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header App">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ padding: "0px" }}>
                            <FormikFormStudentsEnrollment />
                        </div>
                    </div>
                </div>
            </div>


            <div className="titles-container">
                <h5>Enrollment Process</h5>
            </div>
            <div className="container-section">
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Enrollment citation</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Your next registration appointment is at: </h6><br />
                        <h6 className="text-italic">fecha hora</h6>
                        <br /><br />
                        <button type="button" className="btn boton-gris" data-toggle="modal" data-target="#modalEnroll">
                            Go&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EnrollmentProcess;