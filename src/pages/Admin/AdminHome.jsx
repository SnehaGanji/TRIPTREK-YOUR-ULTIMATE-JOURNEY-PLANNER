import React from "react";
import AdminNav from "../navbar/AdminNav";

const AdminHome = () => {
  return (
    <div>
      <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2  text-dark tourbg">
        <div className="mt-2">
          <AdminNav />
          <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50  ">
            <div className="container py-5">
              <div className="d-flex justify-content-center mt-5 py-5">
                <div className="intro-wrap">
                  <h1 className="fw-bold fs-1 d-flex justify-content-center text-primary">
                    WELCOME
                  </h1>
                  <h1 className="fw-bold fs-1 d-flex justify-content-center text-info">
                    ADMIN
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
