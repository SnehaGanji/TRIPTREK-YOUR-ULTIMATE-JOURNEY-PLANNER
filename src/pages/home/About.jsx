import React from "react";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div>
      <div className="bg-warning py-md-0 py-sm-0 ">
        <div className="container-fluid ">
          <div className="row">
            <div className="mt-5 ">
              <div
                className="py-md-2 py-sm-0 "
                style={{ backgroundColor: "rgb(255, 243, 205)" }}
              >
                <div
                  className="container-fluid  py-sm-0   bg rounded-bottom-pill shadow-4-strong "
                  style={{ backgroundColour: "black", opacity: "90%" }}
                >
                  <Navbar />
                  <div className="fw-bold mt-1 py-md-5 py-sm-0 ">
                    <div className="display-1 mt-5 text-center py-md-5 py-sm-0 ">
                      <div className="mt-5 d-flex justify-content-center fw-bold ">
                        {" "}ABOUT TripTrek 
                    {/* <div className="display-1 my-3 text-center py-md-5 py-sm-0 ">
                      <div className="mt-5 d-flex justify-content-center fw-bold text-white">
                        ABOUT ALOHA TRAVELS */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
