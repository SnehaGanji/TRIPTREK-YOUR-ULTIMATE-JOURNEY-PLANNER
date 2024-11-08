import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Navbar from "../../components/navbar/Navbar";
import { addContact } from "../../api/contact";
import { toast } from "react-toastify";
import Footer from "../../components/footer/Footer";
import video from "../../backgroundvideo.mp4"

const Contact = () => {
  const scollToRef = useRef();
  useEffect(() => {
    scollToRef.current.scrollIntoView();
  }, [scollToRef]);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    text: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContact(data);
      toast.success("Contact Successfully");
    } catch (error) {
      console.log(error);
    }
  };
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
                  className="container-fluid  py-sm-0  "
                  style={{ backgroundColour: "black", opacity: "90%" }}
                >
                 
                  <div className="fw-bold mt-1 py-md-5 py-sm-0 ">
                    <div className="display-1 my-3 text-center py-md-5 py-sm-0 ">
                      <div className="py-md-5 pb-4 d-flex justify-content-center fw-bold text-white">
                        Contact TripTrek
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container-fluid ">
          <div
            className="pb-3"
            // style={{ backgroundColor: "rgb(255, 243, 205)" }}
          >
            <div className="pt-4 ">
              <div className="container-fluid  px-md-5 px-sm-0  ">
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-5 ">
                    <div
                      className="card p-5 text-dark"
                      // style={{ backgroundColor: "rgb(255, 243, 205)" }}
                    >
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <h1>CONTACT US</h1>
                          <div className="mb-3">
                            <label
                              for="exampleInputName"
                              className="form-label"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputName"
                              aria-describedby="emailHelp"
                              name="name"
                              value={data.name}
                              onChange={handleChange}
                            />
                          </div>{" "}
                          <div className="mb-3">
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              name="email"
                              value={data.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleInputnumber"
                              className="form-label"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputnumber"
                              aria-describedby="emailHelp"
                              name="phone"
                              value={data.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleInputAddress"
                              className="form-label"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputAddress"
                              name="address"
                              value={data.address}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleInputAddress"
                              className="form-label"
                            >
                              Message
                            </label>
                            <textarea
                              type="text"
                              className="form-control"
                              id="exampleInputAddress"
                              name="message"
                              value={data.message}
                              onChange={handleChange}
                            />
                          </div>
                          <button type="submit" className="btn btn-warning">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <div className="container mt-5">
                <div className="d-flex justify-content-center my-5"></div>
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

export default Contact;
