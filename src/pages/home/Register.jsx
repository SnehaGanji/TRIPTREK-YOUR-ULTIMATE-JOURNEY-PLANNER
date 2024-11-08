import React from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 bg-warning text-dark">
      <div className="mt-2">
        <Navbar />
        <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50 ">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-5 ">
              <div className="card bg-success p-5 text-dark bg-opacity-25  ">
                <div className="card-body">
                  <form>
                    <h1>CREATE ACCOUNT</h1>
                    <div className="mb-3">
                      <label for="exampleInputName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="emailHelp"
                      />
                    </div>{" "}
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword" className="form-label">
                        Password{" "}
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword"
                        aria-describedby="passwordHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputnumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputnumber"
                        aria-describedby="numberHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputAddress"
                      />
                    </div>
                    <button type="submit" className="btn btn-warning">
                      Submit
                    </button>
                    <div className="mt-3">
                      <Link className="form-text mt-5" to="/login">
                        Alredy Registered.?..Login here...
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
