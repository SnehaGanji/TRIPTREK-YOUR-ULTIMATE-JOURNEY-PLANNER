import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { getTours } from "../../api/tour";
import SingleCard from "../home/SingleCard";
import video from "../../backgroundvideo.mp4"

const AllTours = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const scollToRef = useRef();
  useEffect(() => {
    scollToRef.current.scrollIntoView();
  }, [scollToRef]);

  const getAllTours = async () => {
    try {
      const res = await getTours();

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTours();
  }, []);

  return (
    <div ref={scollToRef}>
        <video autoPlay muted loop id="myVideo" style={{
      position: 'fixed',
      right: 0,
      bottom: 0,
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      zIndex: -1000,
      backgroundSize: 'cover',
      opacity:"0.7"
    }}>
      <source src={video} type="video/mp4" />
    </video>
    <Navbar />
      <div className=" py-md-0 py-sm-0 ">
        <div className="container-fluid ">
          <div className="row">
            <div className="mt-5 ">
              <div
                className="py-md-2 py-sm-0 "
                // style={{ backgroundColor: "rgb(255, 243, 205)" }}
              >
                <div
                  className="container-fluid  py-sm-0     "
                  style={{ backgroundColour: "black", opacity: "90%" }}
                >
                  
                  <div className="fw-bold mt-1 py-md-5 py-sm-0 ">
                    <div className="display-1 my-3 text-center py-md-5 py-sm-0 ">
                      <div className="py-md-5  pb-4 d-flex justify-content-center fw-bold text-white">
                        All Tours And Travels
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Navbar /> */}

      <div className="">
        <div className="container-fluid ">
          <div
            className="pb-3"
            // style={{ backgroundColor: "rgb(255, 243, 205)" }}
          >
            <div className="row pt-5 px-md-3">
              {data &&
                data.map((product, index) => {
                  return <SingleCard product={product} key={product._id} />;
                })}
            </div>

            <section>
              <div className="container mt-5">
                <div className="d-flex justify-content-center my-5">
                  {/* <div className="intro-wrap my-3 ">
                    <button className="btn btn-dark px-5 rounded-pill">
                      <h1 className="fw-bold fs-1 d-flex justify-content-center text-white">
                        VIEW ALL TOURS
                      </h1>
                    </button>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4 mb-lg-0">
                    <div className="card mb-3 bg-black py-5">
                      <div className="w-75 mx-auto">
                        <div className="d-flex justify-content-center">
                          <h1 className="text-warning">
                            Let's you Explore the Best. Let's Stay in Touch
                          </h1>
                        </div>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title text-center text-white mb-4">
                          Contact Us Now
                        </h4>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-outline-success rounded-pill">
                            <h5 className="text-white">GET IN TOUCH</h5>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTours;
