import Navbar from "../../components/navbar/Navbar";
import SingleCard from "./SingleCard";
import Footer from "../../components/footer/Footer";
import { useEffect, useRef, useState } from "react";
import { getTours } from "../../api/tour";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import video from "../../backgroundvideo.mp4"
const Home = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const scollToRef = useRef();
  useEffect(() => {
    scollToRef.current.scrollIntoView();
  }, [scollToRef]);

  const getAllTours = async () => {
    try {
      const res = await getTours();
      let item = [];
      console.log(res.data.length);
      for (let i = 0; i < res.data?.length; i++) {
        if (i < 6) {
          item.push(res.data[i]);
        }
      }
      setData(item);
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
   
      <div className=""
      // style={{ backgroundColor: "#f7ce52", paddingBottom: "1rem" }}
      >
        {/* <div style={{ width: 100 }}>
  <iframe
    allow="fullscreen"
    frameBorder={0}
    height={270}
    src="/explore.jpg"
    width={`750px`}
  />
  
 
</div> */}

        <section className="">
          <div className="container py-5">
            <div className="d-flex justify-content-center mt-5 py-5">
              <div className="intro-wrap">
                {/* <h1 className="fw-bold fs-1 text-primary mx-auto">
                  <span className="d-block">Let's Enjoy Your Trip </span> 
                   <span className="typed-words"></span>
                  
                </h1> */}
                <h1 className="fw-bold fs-1 d-flex justify-content-center text-primary">
                  FIND YOUR NEW 
                </h1>
                <h1 className="fw-bold fs-1 d-flex justify-content-center text-info">
                  ADVENTURE
                </h1>
                <p className="text-center text-center text-white">
                  Book Unique And Adventurous tour experience including Camsites
                </p>
                <p className="text-center text-white">Explore the world with us.</p>

                <div className="text-center">
                  <button
                    className="btn btn-success rounded-pill"
                    onClick={() => navigate("/allTour")}
                  >
                    <h3>EXPLORE TOURS</h3>
                  </button>
                </div>
                <div className="text-center mt-2 ">
                  <button
                    className="btn btn-success rounded-pill"
                    onClick={() => navigate("/explore")}
                  >
                    <h3>EXPLORE PLACES</h3>
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="row my-5">
              <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card ">
                  <div>
                    <img
                      src="images/camping.jpg"
                      alt="camping"
                      className="card-img-top"
                      style={{ height: "140px" }}
                    ></img>
                  </div>
                  <span className="d-flex  justify-content-center loc mb-2 px-3 pt-2">
                    <span className="icon-room mr-3"></span>
                    <h5>Camping & Day Use</h5>
                  </span>
                  <div className="d-flex  justify-content-center px-2">
                    <div>
                      <p>Discover New Camping Spots that are right for you</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card">
                  <div>
                    <img
                      src="images/tours&tickets.webp"
                      alt="tours-and-tickets"
                      className="card-img-top"
                      style={{ height: "140px" }}
                    ></img>
                  </div>
                  <span className="d-flex  justify-content-center loc mb-2 px-3 pt-2">
                    <span className="icon-room mr-3"></span>
                    <h5>Tours & Tickets</h5>
                  </span>
                  <div className="d-flex align-items-center px-2">
                    <div>
                      <p>Book tours and Tickets to participate in events</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card ">
                  <div>
                    <img
                      src="images/permits.avif"
                      alt="permits"
                      className="card-img-top"
                      style={{ height: "140px" }}
                    ></img>
                  </div>
                  <span className="d-flex justify-content-center loc mb-2 pt-2">
                    <span className="icon-room mr-3"></span>
                    <h5>Permits</h5>
                  </span>
                  <div className="d-flex justify-content-center px-2">
                    <div>
                      <p>
                        Get Exclusive Permits for access to high-demand
                        locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card ">
                  <div>
                    <img
                      src="images/recreactional.webp"
                      alt="recreational activities"
                      className="card-img-top"
                      style={{ height: "140px" }}
                    ></img>
                  </div>
                  <span className="d-flex justify-content-center loc mb-2 pt-2">
                    <span className="icon-room mr-3"></span>
                    <h5>Recreation Activities</h5>
                  </span>
                  <div className="d-flex justify-content-center px-2">
                    <div>
                      <p>Discover New Camping Spots that are right for you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* <hr className="text-white border-5"/> */}
        <section>
          <div className="container">
            <div className="d-flex justify-content-center my-5">
              <div className="intro-wrap">
                {/* <h1 className="fw-bold fs-1 text-primary mx-auto">
                  <span className="d-block">Let's Enjoy Your Trip </span> 
                   <span className="typed-words"></span>
                  
                </h1> */}
                <h1 className="fw-bold fs-1 d-flex justify-content-center text-white my-5">
                  EXPLORE DESTINATION & ACTIVITIES
                </h1>
                <div className="row">
                  {data &&
                    data.map((product, index) => {
                      return <SingleCard product={product} key={product._id} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <hr className="text-white border-5"/> */}
        <section>
          <div className="container">
            <div className="d-flex justify-content-center my-5">
              <div className="intro-wrap my-3 ">
                <button
                  className="btn btn-dark px-5 rounded-pill"
                  onClick={() => navigate("/allTour")}
                >
                  <h1 className="fw-bold fs-1 d-flex justify-content-center text-white">
                    VIEW ALL TOURS
                  </h1>
                </button>
              </div>
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
                      <button
                        className="btn btn-outline-success rounded-pill"
                        onClick={() => navigate("/contact")}
                      >
                        <h5 className="text-white">GET IN TOUCH</h5>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
