import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import config from "../../api/config";
import moment from "moment";

const SingleCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div className="card mb-3 rounded-5">
          <img
            src={`http://${window.location.hostname}:5000/tourimages/${product.photo}`}
            className="card-img-top img-fluid img-thumbnail rounded-5 p-4"
            alt="..."
            style={{ height: "250px" }}
          />
          <div className="w-75 mx-auto" style={{ marginTop: "-2rem" }}>
            <div className="card d-flex p-2">
              <div className="d-flex justify-content-center">
                <span className="text-warning">
                  <FaRupeeSign fontSize="18px" />
                </span>
                <h5 className="text-warning "> {product.price} / Person</h5>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{product.title}</h5>
            <p className="card-text text-center">{product.description}</p>
            <div className="container overflow-hidden mb-3">
              <div className="row gy-3">
                <div className="col-12">
                  <div className="p-1 bg-light">
                    {product.city}, {product.address}
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-1 bg-light">
                    {moment(product.tourDate).format("MMMM-YYYY")}
                  </div>
                </div>
                {/* <div className="col-6">
      <div className="p-1 bg-light">4 stops</div>
    </div> */}
                <div className="col-6">
                  <div className="p-1 bg-light">
                    {product.maxGroupSize} People
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-warning pt-3 px-3">{product.rating ? `${product.rating} Rating (5)` : "No Ratings"} </p>

              <button
                className="btn btn-warning rounded-pill"
                onClick={() => navigate(`/view/${product._id}`)}
              >
                <h5>Details</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
