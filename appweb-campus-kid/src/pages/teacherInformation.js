import React, {useState} from "react";

function TeacherInformation() {
    const [isDisabled, setIsDisabled] = useState(true);
  
    const handleClick = () => {
      setIsDisabled(!isDisabled)
    };
    return (
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
  );
}

export default TeacherInformation;