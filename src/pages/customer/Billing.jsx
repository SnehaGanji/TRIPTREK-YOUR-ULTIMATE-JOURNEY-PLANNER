import React, { useState } from "react";
import Paginations from "../../components/paginations/paginations";
import moment from "moment";
import { useSelector } from "react-redux";
const Billing = ({ booked }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2);
  const { user } = useSelector((state) => state.auth);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = booked.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(booked.length / recordsPerPage);

  return (
    <div className="col py-3  mt-5 px-md-5 px-sm-0">
      <h1 className="bold mb-5 ">BILLING DETAILS</h1>
      {currentRecords &&
        currentRecords.map((data, index) => {
          return (
            <div className="card my-5" key={data._id}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3 px-3 fw-bold mt-5 text-center">
                    <h2>price:</h2>
                    <b className="display-6 text-center fw-bold">
                      ${data.totalPrice}
                    </b>
                  </div>
                  <div className="col-sm-7 px-5 mt-3 text-start">
                    <h6 className="fs-6 mb-3 text-start">
                      Paid on {moment(data.bookAt).format("DD-MMMM-YYYY")}{" "}
                      {moment(data.bookAt).format("dddd")}
                    </h6>
                    <h5 className="text-dark mt-2 text-start">
                      Tour : {data.tourName.title}
                    </h5>
                    <h6 className="text-dark mt-2 text-start fw-bold">
                      Paid : Yes
                    </h6>
                    <h5 className="text-dark mt-2 text-start">{user.name}</h5>
                    <h5 className="text-dark mt-2 text-start">{user.email}</h5>
                  </div>
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
  );
};

export default Billing;
