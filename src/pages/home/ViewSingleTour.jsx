import { BsCalendarDate, BsPeople, BsStar } from "react-icons/bs";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect, useRef, useState, useCallback } from "react";
import { getTourById } from "../../api/tour";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { getReviews } from "../../api/review";
import { getUserById } from "../../api/user";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

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
  {
    id: 7,
    image: "https://www.jetsetter.com//uploads/sites/7/2018/04/s0i_qgfG.jpeg",
    name: "",
    address: "",
  },
];
const ViewSingleTour = () => {
  const scrollToRef = useRef();
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState({});
  const [review, setReview] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const startCoords = data.startLocation?.coordinates
    ? {
        lat: data.startLocation.coordinates[1],
        lng: data.startLocation.coordinates[0],
      }
    : null;

  const endCoords = data.endLocation?.coordinates
    ? {
        lat: data.endLocation.coordinates[1],
        lng: data.endLocation.coordinates[0],
      }
    : null;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCUA3uUquQ88On7YaIFbBpByARvNj64GAU",
  });

  const getSingleTour = async () => {
    try {
      const res = await getTourById(id);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllReviews = async () => {
    try {
      const res = await getReviews();
      let item = [];
      for (let i of res.data) {
        if (i.tourId === id) {
          const tour = await getTourById(i.tourId);
          i.tourId = tour.data;
          const user = await getUserById(i.user);
          i.user = user.data;
          item.push(i);
        }
      }
      setReview(item);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleTour().then(() => {
      if (isLoaded && startCoords && endCoords) {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
          {
            origin: startCoords,
            destination: endCoords,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === "OK") {
              setDirectionsResponse(result);
            } else {
              console.error(`error fetching directions ${status}`);
            }
          }
        );
      }
    });
    getAllReviews();
  }, []);

  console.log(review, "rr");

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div ref={scrollToRef}>
      <Navbar />
      <div className="backImg1" style={{ paddingBottom: "1rem" }}>
        <div
          style={
            {
              // backgroundColor: "#fff3cd",
              // paddingBottom: "1rem",
              // paddingInline: "1rem",
            }
          }
        >
          <section
          // className="rounded-bottom-5"
          // style={{
          //   backgroundImage:
          //     // `{url(${product.image})}`,
          //     `url(http://${window.location.hostname}:5000/tourimages/${data.photo})`,
          //   width: "100%",
          //   height: "80vh",
          //   backgroundSize: "100% 100%",
          //   backgroundRepeat: "no-repeat",
          //   borderBottomLeftRadius: "30rem",
          //   borderBottomRightRadius: "30rem",
          //   // opacity:"50%"
          // }}
          >
            <div className="container py-5 ">
              <div className="d-flex justify-content-center mt-5 py-5">
                <div
                  className="intro-wrap p-3 px-5 rounded-pill"
                  style={{ backgroundColor: "black", opacity: "75%" }}
                >
                  <h1 className="fw-bold fs-1 d-flex text-center text-light mx-3 pt-3">
                    {data.title}
                  </h1>
                  {/* <h1 className="fw-bold fs-1 d-flex justify-content-center text-info">
                    ADVENTURE
                  </h1> */}
                  <div className="container overflow-hidden text-center mb-3">
                    <div className="row gy-3">
                      <div className="col-6">
                        <h5 className="p-1 text-light">
                          {data.city} {data.address}
                        </h5>
                      </div>
                      <div className="col-6">
                        <h5 className="p-1 text-light">
                          {moment(data.tourDate).format("MMMM-YYYY")}
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pb-3">
                    {user ? (
                      <button
                        className="btn btn-warning rounded-5 mt-2 text-center"
                        onClick={() => navigate(`/payment/${id}`)}
                      >
                        <h1>Book Tour Now !</h1>
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning rounded-5 mt-2 text-center"
                        onClick={() => navigate("/login")}
                      >
                        <h1>Login To Book !</h1>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div style={{ height: "500px", width: "100%" }}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={startCoords}
            zoom={13}
          >
            {startCoords && (
              <Marker position={startCoords} label="Start Location" />
            )}

            {endCoords && <Marker position={endCoords} label="End Location" />}

            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </div>

        <section
          style={{ backgroundColor: "#fff3cd", paddingBottom: "1rem" }}
          className=" rounded-2  m-2 "
        >
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h3 className="text-uppercase mb-4">Details</h3>

                <div className="container overflow-hidden mb-3">
                  <div className="row gy-3">
                    <div className="col-6">
                      <div className="d-flex justify-content-between">
                        <p>
                          <BsCalendarDate
                            fontsize="30px"
                            className="text-warning"
                          />{" "}
                          Next Date :{" "}
                          {moment(data.tourDate).format("MMMM-YYYY")}
                        </p>
                      </div>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-6">
                      <div className="d-flex ">
                        <p>
                          <BsPeople fontsize="30px" className="text-warning" />{" "}
                          {data.maxGroupSize} People
                        </p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="d-flex justify-content-between">
                        <p>
                          <BsStar fontsize="30px" className="text-warning" />{" "}
                          Rating : 4.8/5
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-4">
                  <h3 className="text-uppercase mb-4">Tour Guides</h3>

                  <div className="container overflow-hidden mb-3">
                    <div className="row gy-3">
                      <div className="col-6">
                        <div className="d-flex">
                          <div className="mt-1 me-3">
                            <img
                              src="/images/dummy-profile.png"
                              alt="profile"
                              className="img-fluid rounded-circle"
                              style={{ height: "40px", width: "40px" }}
                            />
                          </div>
                          <div>
                            <h6>Lead Guide</h6>
                            <p className="text-warning">Mia Hyillia</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="d-flex">
                          <div className="mt-1 me-3">
                            <img
                              src="/images/dummy-profile.png"
                              alt="profile"
                              className="img-fluid rounded-circle"
                              style={{ height: "40px", width: "40px" }}
                            />
                          </div>
                          <div>
                            <h6>Tour Guide</h6>
                            <p className="text-warning">Jennifer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h3 className="text-uppercase mb-4 pb-1">
                  About the {data.title}
                </h3>

                <p>{data.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Review Sliders */}
        <section className="my-5 px-3">
          <div
            className="scrolling-wrapper"
            style={{
              overflowX: "scroll",
              overflowY: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {/* {review &&
              review.map((product, index) => {
                return (
                  <div
                    className="card mx-md-5"
                    style={{ display: "inline-block" }}
                  >
                    <div className="row">
                      <div className="col">
                        <img
                          src={`http://${window.location.hostname}:5000/userimages/${product.user.photo}`}
                          alt={product.title}
                          width="70"
                          height="70"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="col-sm-5 mt-4">{product.user.name}</div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{product.message}</h5>
                      <h5 className="card-title text-center  mb-3 mt-5">
                        {product.rating === 5 ? (
                          <>⭐⭐⭐⭐⭐</>
                        ) : product.rating === 4 ? (
                          <>⭐⭐⭐⭐</>
                        ) : product.rating === 3 ? (
                          <>⭐⭐⭐</>
                        ) : product.rating === 2 ? (
                          <>⭐⭐</>
                        ) : (
                          <>⭐</>
                        )}
                      </h5>
                    </div>
                  </div>
                );
              })} */}
            <div className="row px-5">
              {review &&
                review.map((product, index) => {
                  return (
                    <div className="col">
                      <div className="card ml-md-3 mb-5 " key={index}>
                        <div
                          className=" mx-md-5 mb-5 mt-4 border-light"
                          style={{ display: "inline-block" }}
                        >
                          <div className="row">
                            <div className="col-sm-4">
                              <img
                                src={`http://${window.location.hostname}:5000/userimages/${product.user.photo}`}
                                alt={product.title}
                                width="70"
                                height="70"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="col-sm-5 mt-4">
                              {product.user.name}
                            </div>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title t">{product.message}</h5>
                            <h5 className="card-title text-center  mb-3 mt-5">
                              {product.rating === 5 ? (
                                <>⭐⭐⭐⭐⭐</>
                              ) : product.rating === 4 ? (
                                <>⭐⭐⭐⭐</>
                              ) : product.rating === 3 ? (
                                <>⭐⭐⭐</>
                              ) : product.rating === 2 ? (
                                <>⭐⭐</>
                              ) : (
                                <>⭐</>
                              )}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* <div
            id="carouselExampleControls"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {products.map((product, index) => {
                return (
                  <>
                    <div className="carousel-item">
                      <div className="card-wrapper container-sm d-flex  justify-content-around"></div>
                      <div className="card  " style={{ width: "18rem" }}>
                        <img
                          src={products[x + 0]?.image}
                          className="card-img-top"
                          alt="..."
                        />

                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                        </div>
                      </div>
                      <div className="card  " style={{ width: "18rem" }}>
                        <img
                          src={products[x + 1]?.image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                        </div>
                      </div>
                      <div className="card  " style={{ width: "18rem" }}>
                        <img
                          src={products[x + 2]?.image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                        </div>
                      </div>
                    </div>
                    {x++}
                  </>
                );
              })}

              <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex   justify-content-around">
                  <div className="card  " style={{ width: "18rem" }}>
                    <img
                      src="https://source.unsplash.com/collection/190727/1600x900"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="https://source.unsplash.com/collection/190727/1600x900"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="https://source.unsplash.com/collection/190727/1600x900"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex  justify-content-around">
                  <div className="card " style={{ width: "18rem" }}>
                    <img
                      src="https://source.unsplash.com/collection/190727/1600x900"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="https://source.unsplash.com/collection/190727/1600x900"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="https://source.unsplash.com/collection/190727/1600x900"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div> */}
        </section>
        <section className="my-5 px-5">
          <div className="row px-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4 mb-lg-0">
              <div className="card mb-3 bg-black py-5 opacity-75">
                <div className="row mt-4">
                  <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
                    <h1 className="text-warning">What Are You Waiting For?</h1>

                    <h5 className="text-light">
                      Infinite Memories. Make it Yours Today
                    </h5>

                    <div className="mt-4"></div>
                  </div>

                  <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
                    {user ? (
                      <button
                        className="btn btn-warning rounded-5 mt-2 text-center"
                        onClick={() => navigate(`/payment/${id}`)}
                      >
                        <h1>Book Tour Now !</h1>
                      </button>
                    ) : (
                      <button className="btn btn-warning rounded-5 mt-2 text-center">
                        <h1>Login To Book !</h1>
                      </button>
                    )}
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

export default ViewSingleTour;
