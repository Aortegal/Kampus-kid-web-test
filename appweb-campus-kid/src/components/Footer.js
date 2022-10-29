import React from "react";
import '../index.css';

function Footer () {
    return (
        <>
        <footer className="container-principal pt-5">
            <div className="col-12 footer-princ">
                <img className="img-fluid" src="images\logoArtboard 1_1.png" style={{ alignItems: "center", maxWidth: "10%" }} />
                <h2 style={{ color: "white", marginTop: "-20px", textAlign: "center" }}>Campus Kid</h2>

                <row style={{ display: "flex", justifyContent: "space-evenly", padding: "50px 0px 50px 0px" }}>
                <a href="http://" className="col-2" >HOME</a>
                <a href="http://" className="col-2" >OUR SERVICES</a>
                <a href="http://" className="col-2" >LOGIN</a>
                <a href="http://" className="col-2" >SIGN UP</a>
                </row>
            </div>
        </footer>
        </>
  );
}

export default Footer;
