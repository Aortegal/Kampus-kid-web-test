import React from "react";
import { FormikFormStudents } from "./modalSignUp";
import { FormikFormStudentsLogin } from "./modalLogin";

function Header () {
    return (
        <>
            <div className="modal fade modal-xl" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header App">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="modal-body" style={{padding: "0px"}}>
                            <FormikFormStudentsLogin />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade modal-xl" id="modal2" tabindex="1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header App">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Sign</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="modal-body" style={{padding: "0px"}}>
                            <FormikFormStudents />
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar sticky-top color Navbar">
                <a className="navbar-brand" href="#">
                <img className="d-inline-block align-top App-logo" src="/images/logo.png" alt="hola" />
                <h2 className="texto-logo" style={{ color: "#2f2f2f" }}>Campus <br /> Kid</h2>
                </a>
                <div className="btn-group nav-boton boton-menu-grupo" role="group" aria-label="Basic example">
                    <button type="button" className="btn boton-menu-i" data-toggle="modal" data-target="#modal1">
                        <i class="fa-solid fa-right-to-bracket"></i>
                    </button>

                    <button type="button" className="btn boton-menu-d" data-toggle="modal" data-target="#modal2">
                        <i class="fa-solid fa-user-plus"></i>

                    </button>
                </div>
            </nav>

        </>
    )
}

export default Header;