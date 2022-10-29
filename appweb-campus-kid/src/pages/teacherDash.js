import React from "react";
import { Link } from "react-router-dom";
import TeacherGrades from "./teacherGrades";
import TeacherInformation from "./teacherInformation";
import "./pages.css";

function TeacherDash () {
    return (
        <>
            <div className="row container-principal">
                <div className="col-sm-3" >
                    <div className="nav flex-column nav-pills ppal-container menu-dash" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <h5 style={{marginLeft: "25px"}}><b>Teacher Dashboard </b></h5>
                        <button className="nav-link boton-verde-rec item-menu-dash active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <i className="fa-solid fa-circle-info"></i>&nbsp;&nbsp;&nbsp;<h5 style={{display: 'inline-block'}}>Personal Information</h5>
                        </button>
                        <button className="nav-link boton-verde-rec item-menu-dash" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <i className="fa-solid fa-user-graduate"></i>&nbsp;&nbsp;&nbsp;<h5 style={{display: 'inline-block'}}>Grades</h5>
                        </button>

                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <TeacherInformation />
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <TeacherGrades />
                        </div>
                    </div>
                </div>
            </div>
        </>
);
}

export default TeacherDash;
