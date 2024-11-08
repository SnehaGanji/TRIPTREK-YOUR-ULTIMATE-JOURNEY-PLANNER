import React from "react";
import About from "./About";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import video from "../../backgroundvideo.mp4"

const Gallery = () => {
  const products = [
    {
      id: 1,
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2019/04/most-beautiful-places-in-the-world-seljalandsfoss-iceland.png?fit=675%2C501",
      name: "",
      address: "",
    },
    {
      id: 2,
      image: "https://wallpaperaccess.com/full/1540354.jpg",
      name: "",
      address: "",
    },
    {
      id: 3,
      image:
        "https://static.toiimg.com/photo/msid-87867224,width-96,height-65.cms",
      name: "",
      address: "",
    },
    {
      id: 4,
      image:
        "https://www.treebo.com/blog/wp-content/uploads/2018/06/Snow-Sand-Road-The-21-Most-Beautiful-Places-In-India.jpg",
      name: "",
      address: "",
    },
    {
      id: 5,
      image:
        "https://static.toiimg.com/thumb/msid-92089121,width-748,height-499,resizemode=4,imgsize-139308/.jpg",
      name: "",
      address: "",
    },
    {
      id: 6,
      image:
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/07/Nubra-Valley-in-Ladakh.jpg",
      name: "",
      address: "",
    },
  ];
  return (
    <div>
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
                  // style={{ backgroundColour: "black", opacity: "90%" }}
                >
                 
                  <div className="fw-bold mt-1 py-md-5 py-sm-0 ">
                    <div className="display-1 my-3 text-center py-md-5 py-sm-0 ">
                      <div className="py-md-5 pb-4 d-flex justify-content-center fw-bold text-white  ">
                        {/* GALLERY  TRAVELEAZY
                         */}
                         Gallery TripTrek
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

            <div className="row pt-5">
              {products.map((item, index) => {
                return (
                  <div className="col-sm-4" key={index}>
                    <div
                      className="card border-light mt-0"
                      key={index}
                      style={
                        {
                          // display: "flex",
                          // flexDirection: "column",
                          // flex: 1
                        }
                      }
                    >
                      <div className="">
                        <img
                          src={item.image}
                          className="card-img-top object-cover h-60 w-90"
                          alt="Product"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="container ">
              <div className="card bg-dark mt-5">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <h1 className="text-warning">Let's Stay In Touch</h1>
                      <p className="text-white">
                        {" "}we’ve detailed out 9 key tips to remember when
                        writing a tour description. By following these tips,
                        you’ll be able to convey your message even clearer and
                        convince customers to book through you.
                      </p>
                      <input
                        type="email"
                        className="form-control mt-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-sm-6 px-sm-0 px-md-5">
                      <img
                        src="https://img.myipadbox.com/sec/product_l/TBD0584724002.jpg"
                        className="card-img-top object-cover h-60 w-90 px-md-5 px-sm-0 "
                        style={{ height: 200, width: 400 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

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

export default Gallery;
