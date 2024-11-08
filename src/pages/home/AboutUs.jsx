import React from "react";
import About from "./About";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import video from "../../backgroundvideo.mp4"

const AboutUs = () => {
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
                  className="container-fluid  py-sm-0   "
                  style={{ backgroundColour: "black", opacity: "90%" }}
                >
                  <div className="fw-bold mt-1 py-md-5 py-sm-0 ">
                    <div className="display-1 my-3 text-center py-md-5 py-sm-0 ">
                      <div className="py-md-5 pb-5 d-flex justify-content-center fw-bold text-white  ">
                        About TripTrek 
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
          <div className="pb-3"
          //  style={{ backgroundColor: "rgb(255, 243, 205)" }}
           >
            <div className="row py-5 bg-light rounded-2 m-3 "  >
              <div className="col-sm-6 ">
                <h2 className=" px-md-5 px-sm-0">Services</h2>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="px-sm-0 px-md-5 mt-2">
                      ⭐Camping Tours,USA
                    </h6>
                    <h6 className="px-sm-0 px-md-5 mt-2">
                      ⭐Wonders,World wide
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="px-sm-0 px-md-5 mt-2">⭐City Tours,USA</h6>
                    <h6 className="px-sm-0 px-md-5 mt-2">⭐Sports,USA</h6>
                  </div>
                </div>
                <h2 className=" px-md-5 px-sm-0">Teams</h2>

                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="px-sm-0 px-md-5 mt-2">
                      {" "}
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="hugenerd"
                        width="35"
                        height="35"
                        className="rounded-circle"
                      />{" "}
                      Camping Tours,USA
                      <p className="text-warning px-sm-0 px-md-5">CEO</p>
                    </h6>
                    <h6 className="px-sm-0 px-md-5 mt-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1wiOVFzG862cwFLc9rM0SqREmI4Sc5t4k_a6bmVf6aYoqT2UurGqAydSyY4TpC3WOYM83jPfy4g&usqp=CAU&ec=48600113"
                        alt="hugenerd"
                        width="35"
                        height="35"
                        className="rounded-circle"
                      />
                      Wonders,World wide
                      <p className="text-warning px-sm-0 px-md-5">SHYAM</p>
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="px-sm-0 px-md-5 mt-2">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="hugenerd"
                        width="35"
                        height="35"
                        className="rounded-circle"
                      />
                      City Tours,USA
                      <p className="text-warning px-sm-0 px-md-5">JAYA</p>
                    </h6>
                    <h6 className="px-sm-0 px-md-5 mt-2">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="hugenerd"
                        width="35"
                        height="35"
                        className="rounded-circle"
                      />
                      Sports,USA
                      <p className="text-warning px-sm-0 px-md-5">LAKSHMI</p>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <h6 className="">
                  While surfing the web, travelers are often bombarded with
                  information about any given destination. A quick Google search
                  of “things to do in Sydney” or “things to do in New York” for
                  example, will yield thousands of results, and it can quickly
                  become overwhelming. In your tour business, your goal is to
                  attract potential customers to your website and subsequently
                  convert them into paying guests who attend your experience.
                  <p>
                    we’ve detailed out 9 key tips to remember when writing a
                    tour description. By following these tips, you’ll be able to
                    convey your message even clearer and convince customers to
                    book through you.
                  </p>{" "}
                  By typing up the perfect description of tours and travels your
                  business offers, it will help in helping customers during
                  their decision-making process By writing a compelling and
                  engaging tour description within your business, you’ll be able
                  to increase your bookings in no time. All while creating a
                  personal connection with your customers. In this article,
                  <p>
                    we’ve detailed out 9 key tips to remember when writing a
                    tour description. By following these tips, you’ll be able to
                    convey your message even clearer and convince customers to
                    book through you.
                  </p>
                </h6>
              </div>
            </div>

            <div className="row mt-2 ">
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
                        className="card-img-top object-cover px-md-5 px-sm-0 "
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

export default AboutUs;
