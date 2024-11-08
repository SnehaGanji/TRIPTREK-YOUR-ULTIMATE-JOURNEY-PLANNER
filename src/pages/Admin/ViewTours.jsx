import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNav from "../navbar/AdminNav";
import { toast } from "react-toastify";
import moment from "moment/moment";
const ViewTours = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(`http://localhost:5000/tour`);
    console.log(res.data, "tour");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/tour/${id}`);
    console.log(res.data);
    getData();
    toast.success(res.data.msg, {});
  };
  const navigate = useNavigate();
  return (
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 bg-warning text-dark fs-5 tourbg">
      <div className="mt-2">
        <AdminNav />

        <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50  ">
          <div className="text-end">
            <Link className="btn btn-primary  rounded-5" to="/addTours">
              ADD TOURS
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-info">
              <thead>
                <tr>
                  <th scope="col">title</th>
                  <th scope="col">city</th>
                  <th scope="col">address</th>
                  <th scope="col">photo</th>
                  <th scope="col">description</th>
                  <th scope="col">price</th>
                  <th scope="col">maxGroupSize</th>
                  <th scope="col">Date</th>
                  <th scope="col">#Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td className="text-center">{item.title}</td>
                        <td className="text-center">{item.city}</td>
                        <td className="text-center">{item.address}</td>
                        <td className="text-center">
                          <img
                            src={`http://${window.location.hostname}:5000/tourimages/${item.photo}`}
                            alt={item.title}
                            width="70"
                            height="70"
                            className="rounded-circle"
                          />
                        </td>
                        <td className="text-center">{item.description}</td>
                        <td className="text-center">{item.price}</td>
                        <td className="text-center">{item.maxGroupSize}</td>
                        <td className="text-center">
                          {moment(item.tourDate).format("MMMM-YYYY")}
                        </td>
                        <td>
                          <button
                            className="btn btn-info"
                            onClick={() => navigate(`/editTours/${item._id}`)}
                          >
                            EDIT
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item._id)}
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTours;
