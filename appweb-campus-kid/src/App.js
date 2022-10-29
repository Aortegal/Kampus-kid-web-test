import React from "react";
import './App.css';


function App() {
  return (
    <>
      <div className="container-principal">
        <div className="row no-gutters mb-5 text-center container-secundario px-5">
          <div className="col-lg-6 col-md-12">
            <div className="card-body text-left pl-5">
                <h2>Colombia´s #1 academic solution service</h2>
                <h1 >All your grades, <br /> <b>one place.</b></h1>
                <button type="button" className="btn btn-lg boton-gris">
                  Get started
                  <i className="fa fa-arrow-right" style={{ marginLeft: "20px" }}></i>
                </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img className="img-fluid img-landing" src="/images/group 11.png" />
          </div>
        </div>

        <div className="col-9 container-negro" style={{ marginTop: "200px" }}>
          <div className="col-6">
            <h3 style={{ color: "white" }}>Ready for takeoff?</h3>
            <h4 style={{ color: "white" }}>Check out our pricing packages</h4>
            <button type="button" className="btn btn-lg boton-naranja" style={{ marginTop: "20px" }}>
              Read more
            </button>
          </div>
          <div className="col-6">
            <img className="img-fluid" src="/images/group 3.png" style={{ float: "right" }} />
          </div>
        </div>

        <h3 style={{ textAlign: "center", margin: "80px 0px 20px 0px" }}>how to get our services</h3>

        <div id="carouselExampleControls" className="carousel slide col-9" data-interval="false" style={{ float: "none", margin: "0 auto" }}>
          <row>
            <div className="col-10 carousel-inner mx-auto" style={{ backgroundColor: "#ffffff", padding: "150px 80px 150px 80px", borderRadius: "30px" }}>
              <div className="carousel-item active" >
                <span style={{ display: "inline-block" }}>
                  <img className="img-fluid" src="/images/group 4.png" style={{ marginBottom: "60px" }} />
                  <h3>Pick a pricing package</h3>
                  <p>Choose from our packages one that suits your<br />needs. If you need a personalized package<br />contact us and we´ll build it to your needs. </p>
                  <button type="button" className="btn btn-lg boton-gris" style={{ marginTop: "20px" }}>
                    Read more
                  </button>
                </span>
                <span>
                  <img className="img-fluid" src="/images/group 12.png" style={{ float: "right" }} />
                </span>
              </div>
              <div className="carousel-item">
                <span>
                  <img className="img-fluid" src="/images/group 42.png" style={{ marginBottom: "60px" }} />
                  <h3>Pick a pricing package</h3>
                  <p>Choose from our packages one that suits your<br />needs. If you need a personalized package<br />contact us and we´ll build it to your needs. </p>
                  <button type="button" className="btn btn-lg boton-gris" style={{ marginTop: "20px" }}>
                    Read more
                  </button>
                </span>
              </div>
              <div className="carousel-item">
                <span>
                  <img className="img-fluid" src="/images/group 43.png" style={{ marginBottom: "60px" }} />
                  <h3>Pick a pricing package</h3>
                  <p>Choose from our packages one that suits your<br />needs. If you need a personalized package<br />contact us and we´ll build it to your needs. </p>
                  <button type="button" className="btn btn-lg boton-gris" style={{ marginTop: "20px" }}>
                    Read more
                  </button>
                </span>
              </div>
            </div>
            <a className="carousel-control-prev control-slider " href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next control-slider " href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </row>
        </div>

        <div className="col-9 container-blanco" style={{ marginTop: "200px" }}>
          <div className="col-6">
            <img className="img-fluid" src="/images/group 13.png" style={{ float: "left" }} />
          </div>
          <div className="col-6 " >
            <h3 style={{ color: "#2f2f2f", textAlign: "right" }}>any questions?</h3>
            <h4 style={{ color: "#2f2f2f", textAlign: "right" }}>Reach us through mail for any specific information,<br />we´ll be glad to answer.</h4>
            <button type="button" className="btn btn-lg boton-gris" style={{ marginTop: "20px", float: "right" }}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="col-md-9 container-negro" style={{ margin: "0 auto", marginTop: "80px" }}>
          <div className="col-md-12" >
            <h3 style={{ color: "#ffffff", textAlign: "center" }}>our services</h3>
            <h4 style={{ color: "#ffffff", textAlign: "center", marginTop: "20px" }}>We provide a wide range of services to suit your academic needs. Our services<br /> accomodate to personal use or even school or college-wide usage.</h4>

            <row style={{ display: "flex", marginTop: "40px" }}>
              <div className="col-4 card card-blanco">
                <div className="card-body" style={{ display: "flex", alignItems: "center" }}>
                  <i className="fa fa-check-circle-o fa-2x" style={{ marginRight: "10px" }}></i>
                  Grade control
                </div>
              </div>

              <div className="col-4 card card-blanco">
                <div className="card-body" style={{ display: "flex", alignItems: "center" }}>
                  <i className="fa fa-check-circle-o fa-2x" style={{ marginRight: "10px" }}></i>
                  className inscription
                </div>
              </div>

              <div className="col-4 card card-blanco">
                <div className="card-body" style={{ display: "flex", alignItems: "center" }}>
                  <i className="fa fa-check-circle-o fa-2x" style={{ marginRight: "10px" }}></i>
                  Email grades report
                </div>
              </div>
            </row>

            <row style={{ display: "flex" }}>
              <div className="col-4 card card-blanco">
                <div className="card-body" style={{ display: "flex", alignItems: "center" }}>
                  <i className="fa fa-check-circle-o fa-2x" style={{ marginRight: "10px" }}></i>
                  Teacher dashboard
                </div>
              </div>

              <div className="col-4 card card-blanco">
                <div className="card-body" style={{ display: "flex", alignItems: "center" }}>
                  <i className="fa fa-check-circle-o fa-2x" style={{ marginRight: "10px" }}></i>
                  Student dashboard
                </div>
              </div>

              <div className="col-4 card card-blanco">
                <div className="card-body" style={{ display: "flex", alignItems: "center" }}>
                  <i className="fa fa-check-circle-o fa-2x" style={{ marginRight: "10px" }}></i>
                  Academic history
                </div>
              </div>
            </row>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
