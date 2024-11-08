import React, { useEffect } from "react";
import { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalendar2Month } from "react-icons/bs";
import { GiBusStop } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import EditProfile from "./EditProfile";
import MyReviews from "./MyReviews";
import Billing from "./Billing";
import Navbar from "../../components/navbar/Navbar";
import { getBookingById, getBookings } from "../../api/booking";
import { useSelector } from "react-redux";
import Paginations from "../../components/paginations/paginations";
import { getUserById } from "../../api/user";
import { getTourById, updateTour } from "../../api/tour";
import moment from "moment";
import { addReview, getReviews } from "../../api/review";
import { toast } from "react-toastify";
const MyBookings = () => {
  const [data, setData] = useState("myBookings");
  const { user } = useSelector((state) => state.auth);

  const [booked, setBooked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);

  const getBookedTours = async () => {
    try {
      const res = await getBookings();
      let item = [];
      for (let i of res.data) {
        if (i.userId === user._id) {
          const tour = await getTourById(i.tourName);
          i.tourName = tour.data;
          item.push(i);
        }
      }
      setBooked(item);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookedTours();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = booked.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(booked.length / recordsPerPage);

  const [review, setReview] = useState({
    tourId: "",
    user: user._id,
    message: "",
    rating: 0,
  });

  const [rating, setRating] = useState(null);

  const handleChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setRating(review.rating);
  }, [review.rating]);

  const [totalReview, setTotalReview] = useState([]);

  const getAllReviews = async () => {
    try {
      const res = await getReviews();
      setTotalReview(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  const handleReview = async (id) => {
    const res = await getBookingById(id);

    review.tourId = res.data.tourName;
    let total = [];
    let t = 0;
    for (let i of totalReview) {
      if (i.tourId === res.data.tourName) {
        total.push(i);
        t = t + i.rating;
      }
    }
    console.log(total, "lll");
    const tReview =
      (Number(t) + Number(review.rating)) /
      (total.length === 0 ? 1 : total?.length);
    console.log(
      Number(t),
      Number(review.rating),
      total.length === 0 ? 1 : total?.length + 1,
      "jjjj"
    );

    console.log(tReview, "jjjj");
    await updateTour(res.data.tourName, { rating: Math.floor(tReview) });

    await addReview(review);
    toast.success("Review Added Successfully");
    setReview({
      tourId: "",
      user: user._id,
      message: "",
      rating: 0,
    });

    getBookedTours();
  };

  return (
    <div className="container-fluid  backImg1 text-dark ">
      <div className="p-0 m-0 "><Navbar /> </div>
     <div className="">  
      {/* container above and down */}
       
        <div className="">
          <div className="row py-md-5 bg-light ">
            <div className="px-md-5 px-sm-0">
              <div className="row flex-nowrap">
                <div
                  className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  text-dark  "
                  style={{ backgroundColor: "rgb(255,243,205)" }}
                >
                  <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2  text-dark min-vh-100">
                    {/* <a
                      href="#"
                      className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-primary text-decoration-none"
                    > */}
                    <span className="fs-5 mt-5 mb-5 d-none d-sm-inline text-dark">
                      WELCOME
                    </span>
                    {/* </a> */}
                    <ul
                      className="nav nav-pills flex-column   text-dark mb-sm-auto mb-0 align-items-center align-items-sm-start"
                      id="menu"
                    >
                      <li className="nav-item text-dark">
                        <button
                          onClick={() => setData("myBookings")}
                          className="nav-link align-middle px-0"
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="hugenerd"
                            width="20"
                            height="20"
                            className="rounded-circle"
                          />{" "}
                          <h6 className="ms-1 d-none d-sm-inline text-dark">
                            MY BOOKINGS
                          </h6>
                        </button>
                      </li>
                      <li>
                        <button
                          data-bs-toggle="collapse"
                          className="nav-link px-0 align-middle"
                          onClick={() => setData("settings")}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="hugenerd"
                            width="20"
                            height="20"
                            className="rounded-circle"
                          />{" "}
                          <h6 className="ms-1 d-none d-sm-inline  text-dark">
                            SETTINGS
                          </h6>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setData("myReviews")}
                          className="nav-link px-0 align-middle"
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="hugenerd"
                            width="20"
                            height="20"
                            className="rounded-circle"
                          />{" "}
                          <h6 className="ms-1 d-none d-sm-inline  text-dark">
                            MY REVIEWS
                          </h6>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setData("billing")}
                          data-bs-toggle="collapse"
                          className="nav-link px-0 align-middle "
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="hugenerd"
                            width="20"
                            height="20"
                            className="rounded-circle"
                          />
                          <h6 className="ms-1 d-none d-sm-inline  text-dark">
                            BILLING
                          </h6>
                        </button>
                      </li>
                    </ul>
                    <hr />
                    <div className="pb-5">
                      <span className="d-none d-sm-inline mx-1 text-dark">
                        @2024 all rights reserved
                      </span>
                    </div>
                  </div>
                </div>
                {data === "myBookings" && (
                  <div className="col py-md-3 py-3 mt-md-5 px-md-5 px-sm-0">
                    <h1 className="bold mb-5 ">MY BOOKINGS</h1>
                    {currentRecords &&
                      currentRecords.map((data, index) => {
                        return (
                          <div className="card" key={data._id}>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-3 px-3">
                                  <div
                                    className="card-img mt-4 mb-4"
                                    style={{ flexDirection: 1 }}
                                  >
                                    <img
                                      src={`http://${window.location.hostname}:5000/tourimages/${data.tourName.photo}`}
                                      alt={data.title}
                                      className="img-fluid img-thumbnail rounded-5"
                                      style={{
                                        flexDirection: 1,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-7 px-5 mt-3 text-center">
                                  <b className="fs-5 mb-3 text-center">
                                    {data.tourName.title}
                                  </b>
                                  <h5 className="text-warning mt-2 text-center">
                                    {" "}
                                    ${data.tourName.price} / price
                                  </h5>
                                  <h6 className="text-dark mt-2 text-center">
                                    {data.tourName.description}
                                  </h6>
                                  <div className="row mb-1">
                                    <div className="col-sm-6">
                                      <HiLocationMarker
                                        fontSize="30"
                                        className="text-warning"
                                      />
                                      <b>{data.tourName.city}</b>
                                    </div>
                                    <div className="col-sm-6">
                                      <BsCalendar2Month
                                        fontSize="30"
                                        className="text-warning"
                                      />{" "}
                                      <b>
                                        {moment(data.tourName.tourDate).format(
                                          "MMMM-YYYY"
                                        )}
                                      </b>
                                    </div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col-sm-6">
                                      <BsPeopleFill
                                        fontSize="30"
                                        className="text-warning mx-3"
                                      />
                                      <b>{data.people} People</b>
                                    </div>
                                    {/* <div className="col-sm-6">
                                      <GiBusStop
                                        fontSize="30"
                                        className="text-warning"
                                      />
                                      <b>5 stops </b>
                                    </div> */}
                                  </div>
                                  <div className="row mb-">
                                    <div className="col-sm-6  mt-3">
                                      <b className="text-warning mb-0">
                                        {data.tourName.rating
                                          ? data.tourName.rating
                                          : 0}{" "}
                                        RATING
                                      </b>
                                    </div>
                                    {/* <div className="col-sm-6">
                                      <button className="btn btn-warning mb-3 mt-3 rounded-5">
                                        Details
                                      </button>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mb-3 px-5 fw-bold">
                              <label
                                for="exampleFormControlTextarea1"
                                className=" fs-5 form-label"
                              >
                                Submit Review
                              </label>
                              <textarea
                                className="form-control px-md-2 px-sm-0 py-md-4 py-sm-0"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Enter Review"
                                name="message"
                                value={data.message}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="row">
                              <div className=" col-sm-2 px-md-5 px-sm-1 py-md-2 py-sm-0 fs-6 fw-bold">
                                Rating:
                              </div>
                              <div className=" col-sm-2 px-md-1 px-sm-0 py-md-2 py-sm-0 fs-6 fw-bold text-warning">
                                {rating}
                              </div>
                              <div className=" col-sm-5 px-md-1 px-sm-0 py-md-2 py-sm-0 fs-6 fw-bold text-warning">
                                <input
                                  type="range"
                                  className="form-range bg-warning"
                                  min="0"
                                  max="5"
                                  step="1"
                                  id="customRange3"
                                  name="rating"
                                  value={review.rating}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-3 px-md-5 px-sm-0 mb-3 mt-3">
                                <button
                                  className="btn text-white  rounded-5 hover:dark button:hover dark"
                                  onClick={() => handleReview(data._id)}
                                >
                                  Submit Review
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    <div className="row w-50 float-end">
                      <Paginations
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                      />
                    </div>
                  </div>
                )}

                {data === "settings" && <EditProfile />}
                {data === "myReviews" && <MyReviews />}
                {data === "billing" && <Billing booked={booked} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
